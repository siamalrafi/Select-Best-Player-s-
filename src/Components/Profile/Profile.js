import { secondary } from 'daisyui/src/colors/colorNames';
import React from 'react';
import './Profile.css';

const Profile = () => {
    const numbers = [10, 20, 30, 40, 50];

    // numbers.map(second => console.log(second));



    const breakHandle = () => {
        console.log('flkjfkljsf');
    }




    return (
        <div>
            <div className="absolute bg-base-300 w-64 text-black">
                <div>

                    <div className='flex p-8'>
                        <div className="avatar">
                            <div className="w-14 rounded-full  ring-primary  ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt='profile' />
                            </div>
                        </div>
                        <div className='ml-2'>
                            <h1 className='card-title'>Hossain Ali</h1>
                            <p>New York</p>
                        </div>
                    </div>

                    <div className='m-5 p-2 bg-blue-200 rounded'>
                        <div className="text-center flex justify-between grid-cols-3 gap-4">
                            <div>
                                <h1>45kg</h1>
                                <p>Height</p>
                            </div>
                            <div>
                                <h1>6.2</h1>
                                <p>Weight</p>
                            </div>
                            <div>
                                <h1>25yrs</h1>
                                <p>Age</p>
                            </div>
                        </div>
                    </div>


                    <h1 className='p-2'><b >Add A Break</b></h1>
                    <div className='p-3 m-5 rounded-r-lg bg-blue-200 rounded'>
                        <div className="text-center flex justify-between grid-cols-3 gap-4 ">
                            {
                                numbers.map(second =>

                                    <div onClick={breakHandle} key={second} className='rounded-md bg-orange-300'>
                                        <h1>{second}s</h1>
                                    </div>

                                )
                            }





                        </div>
                    </div>



                    <h1 className='p-2'><b>  Exercise Details </b></h1>
                    <div className='p-2 m-3   bg-blue-200 rounded'>
                        <div className="flex justify-between grid-cols-3 gap-4 ">
                            <div>
                                <h1><b>Exercise Time</b></h1>
                            </div>
                            <div>
                                <h1>50s</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 m-3  bg-blue-200 rounded'>
                        <div className="flex justify-between grid-cols-3 gap-4 ">
                            <div>
                                <h1><b>Break Time </b></h1>
                            </div>
                            <div>
                                <h1>50s</h1>
                            </div>
                        </div>
                    </div>

                    {/* This is the completed btn */}
                    <div className='flex justify-center pb-5'>
                        <button className='btn w-full bg-blue-600'>Activity Completed</button>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Profile;