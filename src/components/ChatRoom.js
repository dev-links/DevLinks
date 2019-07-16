import React, { Component } from 'react'
import firebase from '../config/Firebase'


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
            const nextMessage = {
                id:messages.length,
                text: message
            }
            firebase.database().ref('chatrooms/'+nextMessage.id).set(nextMessage)
        }
    }

    render() {
        
        console.log(this.state.message)
        const currentMessages = this.state.messages.map(message => {
            return (
                <li key={message.id}>{message.text}</li>
            )
        })
        return (
            <div>
                <h1>chat room</h1>
                <ul>
                {currentMessages}
                </ul>

                <input type="text" placeholder='Message' name='message'
                onChange={e => this.updateMessage(e)}
                />
                <br />
                <button
                onClick={() => this.submitMessage()}
                >Send</button>
            </div>
        )
    }
}

export default ChatRoom

