import React from 'react';
import { toast } from 'react-toastify';

const ProfileModal = ({ user }) => {

    const { displayName, email, photoURL } = user;

    const handleUpdateProfile = profileData => {
        profileData.preventDefault();

        const profileInfo = {
            name: displayName,
            email: email,
            photo: profileData.target.photo.value,
            education: profileData.target.photo.value,
            location: profileData.target.location.value,
            phone: profileData.target.phone.value,
        }

        // fetch(`http://localhost:5000/profile?email=${email}`, {
        //         method: 'PATCH',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(profileInfo),
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.success) {
        //                 toast.success(`Your is updated`);
        //             }

        //         })

    }

    return (
        <div>
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Edit Your Profile</h3>
                    <form onSubmit={handleUpdateProfile}>
                        <label htmlFor="photo">Profile Picture: </label>
                        <input type="file" name="photo" id="photo" />

                        <input type="text" placeholder='Enter Your Education Information' name='education' className="input text-xl input-bordered w-full max-w-xs mt-1" />

                        <input type="text" placeholder='Enter Your Location' name='location' className="input text-xl input-bordered w-full max-w-xs mt-1" />

                        <input type="tel" placeholder='Enter Your Phone Number' name='phone' className="input text-xl input-bordered w-full max-w-xs mt-1" />

                        <div className="modal-action">
                            <input type="submit" value="Update" className='btn' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;