import React from 'react';
import './User.scss';
import { HiPencil } from 'react-icons/hi'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

const User = () => {
    return (
        <div className='user'>
            <div className='userDisplay'>
                <img src='https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg' alt='user' className='userImage' />
                <div>
                    <div>4.3<TiStarOutline /></div>
                    <h5>Ratings</h5>
                </div>
            </div>
            <div className='userDetails'>
                <div className='heading'>
                    <h1 className='userName'>John Pope,</h1><h1 className='userExp'>5</h1><h3>&nbsp;&nbsp;Yrs Exp.</h3>
                </div>
                <h3>Details</h3>
                <p>I am interested in Science & Web Technology. Basic Lorem Ipsum is simply.</p>
                <div className='subjects'>
                    <div className='subject'>Science</div>
                    <div className='subject'>Maths</div>
                    <div className='subject'>Hindi</div>
                    +
                </div>
            </div>
            <div className='userAwards'>
                <div>
                    <span className='star' style={{ background: '#FF709C', color: '#FF4571' }}><TiStarFullOutline color='white' style={{ border: '#FF4571', color: '' }} /></span>
                    <span className='star' style={{ background: 'yellow', border: '#FFFF33' }}><TiStarFullOutline color='white' style={{}} /></span>
                    <span className='star' style={{ background: '#cccccc', border: 'grey' }}><TiStarFullOutline color='white' style={{}} /></span>
                    <span className='star' style={{ background: 'lightgreen', border: 'green' }}><TiStarFullOutline color='white' style={{}} /></span>
                </div>
                Awards
            </div>
            <div className='userProfile'>
                <div className='profileButton'>
                    <HiPencil color='white' /> Profile
                </div>
            </div>
        </div>
    )
}

export default User;
