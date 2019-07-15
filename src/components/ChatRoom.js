import React, { Component } from 'react'
import snapShot from 'firebase'
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
            .ref('messages/')
            .on('value', () => {
                
                const currentMessages = snapShot.val()
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
            firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
        }
    }

    render() {
        console.log(snapShot)
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


// import firebase from 'firebase'
// import 'firebase/firestore'


//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCIGv6XlpSD9OnO5quHNQrBZQcTIwhxrhg",
//     authDomain: "dev-links-e4992.firebaseapp.com",
//     databaseURL: "https://dev-links-e4992.firebaseio.com",
//     projectId: "dev-links-e4992",
//     storageBucket: "dev-links-e4992.appspot.com",
//     messagingSenderId: "67187498838",
//     appId: "1:67187498838:web:87fd366657598082"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ timestampsInSnapshots: true })

//   export default firebase
