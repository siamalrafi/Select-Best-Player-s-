import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div>

            <div className="card bg-base-300 text-black">
                <div className="card-body">

                    <div className='flex'>
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



                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facilis alias animi! Blanditiis nobis sed dignissimos neque animi ratione eveniet? Minima rem fuga quae dolores sapiente omnis tenetur veniam ipsum.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facilis alias animi! Blanditiis nobis sed dignissimos neque animi ratione eveniet? Minima rem fuga quae dolores sapiente omnis tenetur veniam ipsum.</p>





                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Profile;