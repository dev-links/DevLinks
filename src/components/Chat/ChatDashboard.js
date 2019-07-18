import React, { Component } from 'react'
import Nav from '../NavBar/NavBar'
import './ChatDashboard.css'

export class ChatDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // {chat.id }
            chats: [{id:0,
                    user:'Chris'},
                    {id:1,
                    user:'Bryan'},
                    {id:2,
                    user:'Collins'
                    },
                    {id:3,
                    user:'Rachel'}]
        }
    }


    

    render() {
        let { chats } = this.state
        let displayChats = chats.map((chat,index) => {
            return (
                <li key={chat.id} className='chat'>
                    <div className='left'>
                        <img src="https://via.placeholder.com/50" alt="user"/>
                        <h6>{chat.user}</h6>
                    </div>
                    <button>Chat</button>
                </li>
            )
        })
        return (
            <div>
                {/* <Nav /> */}
                <nav className='dummyNav'>

                </nav>
                <ul>
                    {displayChats}
                </ul>
            </div>
        )
    }
}

export default ChatDashboard
