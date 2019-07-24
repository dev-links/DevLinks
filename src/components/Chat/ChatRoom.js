import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import firebase from '../../config/Firebase';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';
import { getUserData } from '../../redux/actions/userAction'
import './Chatroom.css'
import { connect } from 'react-redux'


const ROOT_CSS = css({
    height: 720,
    // width: 400
  });

export class ChatRoom extends Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            messages: [],
            message: ''
        }
    }

    componentDidMount() {

        firebase.database()
            .ref()
            .child('chatroom') 
            .limitToLast(40)
            .on('value', (snapshot) => {
                const currentMessages = snapshot.val()
                if (currentMessages != null) {
                    console.log(currentMessages)
                    this.setState({ messages: currentMessages })
                }
        })

        const db = firebase.firestore()

        db.collection('users').get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(`${doc.id}`)
            })
        })

        console.log(this.props.credentials)

    }


    updateMessage = (e) => {
        this.setState({ [e.target.name]:e.target.value })
    }

    submitMessage = () => {
        let { message, messages } = this.state
        let time = new Date().toLocaleTimeString()
        const {user: {
            credentials : {handle, userId}}} = this.props
            console.log(handle)
        if(this.state.message !== '') {
            let nextMessage = {
                id:messages.length,
                text: message,
                // FIX start user and senderId with '' add values when logged in -- delete hard code
                user: {handle},
                senderId: {userId},
                time: `${time}`
            }
            firebase.database().ref().child('chatroom/'+nextMessage.id).set(nextMessage)
            
            this.setState({ message: '' })
            
        }
    }

    

    render() {
        console.log(this.state.messages)
        
        
        let { message } = this.state
        const currentMessages = this.state.messages.map(message => {
           console.log(message.user)
            return (
                <div key={message.id}>
                {/* fix to add the right user when a message is added */}
                <h6>{message.user.handle}</h6>
                <li className='speech-bubble'>{message.text}</li>
                </div>
            )
        })
        return (
            <ScrollToBottom className={ROOT_CSS}>
                <div className='navbar-chat'>
                <NavBar />
                </div>
                <ul>
                {currentMessages}
                </ul>

            <div className='input'>
                <input id='input' type="text" placeholder='Message' name='message' value={message}
                onChange={e => this.updateMessage(e)}
                />
                
                <button id='submit-btn'
                onClick={() => this.submitMessage()}
                >Send</button>
            </div>
            </ScrollToBottom>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, { getUserData })(ChatRoom)

