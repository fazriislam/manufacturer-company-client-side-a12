import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='w-1/2 mx-auto mt-3'>
            <div>
                <h2>Name: Fazri Islam Badhon</h2>
                <p>Email: fazriislam111@gmail.com</p>
            </div>
            <div className='border-2 p-1'>
                <h2 className='text-xl font-bold'>Education</h2>
                <p>2022-</p>
                <p>University of Global Village</p>
                <p>1st Semester, Computer Science</p> <hr />
                <h2 className='mt-2'></h2>
                <p>2018-2020</p>
                <p>Barishal Govt Model School & College</p>
                <p>HSC</p><hr />
                <h2 className='mt-2'></h2>
                <p>2016-2018</p>
                <p>Barishal Govt Model School & College</p>
                <p>SSC</p>
            </div>
            <div className='border-2 mt-1 p-1 text-blue-900 font-semibold'>
                <h2 className='text-black font-bold'>Live website links</h2>
                <a href="https://warehouse-98797.web.app/" target="-blank">Click here for first Link</a>
                <br />
                <a href="https://travel-guide-fd1e9.firebaseapp.com/" target="-blank">Click here for second Link</a> <br />
                <a href="https://eloquent-hotteok-5992a9.netlify.app/" target="-blank">Click here for third Link</a>
            </div>


        </div>
    );
};

export default MyPortfolio;