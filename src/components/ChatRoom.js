import React, { Component } from 'react'
import firebase from '../config/Firebase'
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';
import './Chatroom.css'
import { stringify } from 'querystring';

const ROOT_CSS = css({
    height: 650,
    width: 400
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
            .child('chatroom') // FIX change to the combined id of the two users to create a new chat room
            .limitToLast(40)
            .on('value', (snapshot) => {
                const currentMessages = snapshot.val()
                if (currentMessages != null) {
                    this.setState({ messages: currentMessages })
                }
        })

    }


    updateMessage = (e) => {
        this.setState({ [e.target.name]:e.target.value })
    }

    submitMessage = () => {
        let { message, messages } = this.state
        let time = new Date().toLocaleTimeString()
        
        if(this.state.message !== '') {
            let nextMessage = {
                id:messages.length,
                text: message,
                // FIX start user and senderId with '' add values when logged in -- delete hard code
                user: 'chris',
                senderId: '109',
                time: `${time}`
            }
            firebase.database().ref().child('chatroom/'+nextMessage.id).set(nextMessage)
            
            this.setState({ message: '' })
            
        }
    }

    

    render() {
        // console.log(this.state.message)
        
        let { message } = this.state
        const currentMessages = this.state.messages.map(message => {
            return (
                <div key={message.id} >
                {/* fix to add the right user when a message is added */}
                <h6>{message.user}</h6>
                <li className='speech-bubble'>{message.text}</li>
                </div>
            )
        })
        return (
            <ScrollToBottom className={ROOT_CSS}>
                <ul>
                {currentMessages}
                </ul>

            <div className='input'>
                <input id='input' type="text" placeholder='Message' name='message' value={message}
                onChange={e => this.updateMessage(e)}
                />
                
                <button
                onClick={() => this.submitMessage()}
                >Send</button>
            </div>
            </ScrollToBottom>
        )
    }
}

export default ChatRoom

