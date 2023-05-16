import React from 'react'
import './Profile.css';
import { HiOutlinePencilSquare } from 'react-icons/hi2'

const Profile = () => {
    return (
        <div className='profile'>
            {/* Educatiponal Profile */}
            <h2 className='profileHeading'>Edit Your Educational Profile</h2>
            <div className='profileBox'>
                <div className="profileFields">
                    <div className="profileField">
                        <h3>Highest Qualification</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                            <HiOutlinePencilSquare />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Name of Institution</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='anc'  />
                            <HiOutlinePencilSquare />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Course</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='MCA'  />
                            <HiOutlinePencilSquare />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Years of Experience</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='3'  />
                            <HiOutlinePencilSquare />
                        </div>
                    </div>
                </div>
            </div>


            {/* Additional Details */}
            <h2 className='profileHeading'>Additional Details</h2>
            <div className='profileBox'>
                <p><span>Note: </span>&nbsp;Any detail that are not verified yet contribute to profile strength.</p>
                <div className="profileFields">
                    <div className="profileField">
                        <h3>Primary Qualification</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Name of Institution</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Intermediate Course</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Name of Institution</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Course (Intermediate)</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Year of Passing</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='123'  />
                        </div>
                    </div>
                </div>
                <div className="profileBoxUpload">
                    <div className="profileUploadText">Upload Final Marksheet</div>
                </div>
            </div>


            {/* Certification */}
            <h2 className='profileHeading'>Certification / Recognition / Award (if any)</h2>
            <div className='profileBox'>
                <div className="profileFields">
                    <div className="profileField">
                        <h3>Title</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Name of Institution / Signatory</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Field of Recognition</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                    <div className="profileField">
                        <h3>Date of Publishing</h3>
                        <div className="profileFieldInput">
                            <input type="text" placeholder='abc'  />
                        </div>
                    </div>
                </div>
                <div className="profileBoxUpload">
                    <div className="profileUploadText">Upload Certification <p>Lorem.</p></div>
                </div>
            </div>
            <div className="profileButton">
                <div className="profileButtonOutline">&lt; Back</div>
                <div className="profileButtonSolid">Update</div>
            </div>
        </div>
    )
}

export default Profile
