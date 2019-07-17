import React, { Component } from 'react'
import firebase from '../config/Firebase'
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';
import './Chatroom.css'

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
            .ref('chatrooms/')
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
        if(this.state.message !== '') {
            let nextMessage = {
                id:messages.length,
                text: message
            }
            firebase.database().ref('chatrooms/'+nextMessage.id).set(nextMessage)
            
            // this.setState({ message: '' })
            
            // nextMessage.text = ''


            
        }
    }

    

    render() {
        console.log(this.state.message)

        const currentMessages = this.state.messages.map(message => {
            return (
                <div key={message.id} >
                <h6>Chris</h6>
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
                <input id='input' type="text" placeholder='Message' name='message'
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

