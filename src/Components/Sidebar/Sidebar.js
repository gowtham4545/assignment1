import React from 'react'
import './Sidebar.scss';
import { RiHome5Line } from 'react-icons/ri';
import { IoMdLogOut, IoMdShare } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { TiUserAddOutline } from 'react-icons/ti';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='x'>X</div>
            <div className='align dashboard'>Dashboard</div>
            <div className='home'><RiHome5Line /> Home</div>
            <div className='align add'><TiUserAddOutline /> Add Students</div>
            <div className='align complete'>
                <div className=''>
                    <HiOutlineCheckBadge /> Complete Your Profile
                </div>
            </div>
            <div className='align refer'>
                <div>
                    <div>Refer a friend!!</div><IoMdShare />
                </div>
            </div>
            <div className='align setting'>Setting</div>
            <div className='align profile'><CgProfile /> My Profile</div>
            <div className='align logout'>
                <div>
                    <IoMdLogOut /> Logout
                </div>
            </div>
        </div>
    )

}

export default Sidebar