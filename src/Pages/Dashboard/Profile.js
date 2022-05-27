import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ProfileModal from './ProfileModal';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [clicked, setClicked] = useState(false);
    if (!user) {
        return <Loading />
    }
    const { displayName, email, photoURL } = user;

    return (
        <div className='flex flex-col mt-3'>
            <section className='lg:ml-48 mx-auto'>
                <img className='' src={photoURL} alt="" />
                <h2 className='font-bold' >{displayName}</h2>
                <p><small className='font-semibold'>Email: {email}</small></p>
            </section>

            <section className='w-7/12 lg:ml-48 mx-auto'>
                <fieldset className='border-2 p-2'>
                    <legend className='font-bold'>User Info</legend>
                    <div className='border p-1 rounded'>
                        <p className='font-semibold'>Education</p>
                        <p><small>dhfdfdjkfhdkshfjkdsfj</small></p>
                    </div>
                    <div className='border p-1 mt-1 rounded'>
                        <p className='font-semibold'>Location</p>
                        <p><small>dhfdfdjkfhdkshfjkdsfj</small></p>
                    </div>
                    <div className='border p-1 mt-1 rounded'>
                        <p className='font-semibold'>Phone Number</p>
                        <p><small>dhfdfdjkfhdkshfjkdsfj</small></p>
                    </div>
                </fieldset>
            </section>
            <div className='mt-1'>
                <label for="profile-modal" onClick={() => setClicked(true)} class="btn modal-button mx-auto lg:ml-48 block lg:w-1/12 w-2/5 pt-4">Edit Profile</label>
            </div>

            {
                clicked && <ProfileModal />
            }

        </div>
    );
};

export default Profile;