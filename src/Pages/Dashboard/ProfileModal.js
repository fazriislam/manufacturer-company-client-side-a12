import React from 'react';

const ProfileModal = () => {
    return (
        <div>
            <input type="checkbox" id="profile-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="profile-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Edit Your Profile</h3>
                    <form onSubmit={''}>
                        <label htmlFor="photo">Profile Picture: </label>
                        <input type="file" name="photo" id="photo" />

                        <input type="text" placeholder='Enter Your Education Information' name='education' className="input text-xl input-bordered w-full max-w-xs mt-1" />

                        <input type="text" placeholder='Enter Your Location' name='location' className="input text-xl input-bordered w-full max-w-xs mt-1" />

                        <input type="tel" placeholder='Enter Your Phone Number' name='phone' className="input text-xl input-bordered w-full max-w-xs mt-1" />
                    </form>
                    <div class="modal-action">
                        <label for="profile-modal" class="btn">Update</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;