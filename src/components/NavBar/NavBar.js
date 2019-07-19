import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import axios from 'axios';



class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            menuStatus: 'closed'
        }
    }

    handleClick = () => {
        console.log(this.state.menuStatus)
        if(this.state.menuStatus === 'open'){
            this.setState({
                menuStatus: 'closed'
            })
        } else {
            this.setState({
                menuStatus: 'open'
            })
        }
    }
    render(){
        return(
            <div className='navbar-container'>
                <nav>
                    <div className='hamburger-container' onClick={()=> this.handleClick()}>
                        <img className='hamburger-image'
                        src = 'https://image.flaticon.com/icons/svg/52/52045.svg'
                        alt='hamburger-image'/>
                    </div>
                    <ul className= 'ul-1'>

                    </ul>

                </nav>
            </div>
        )
    }
}



export default Navbar