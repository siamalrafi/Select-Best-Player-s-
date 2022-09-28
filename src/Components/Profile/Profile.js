import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div>

            <div className="bg-base-300 text-black">
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
                        <div class="text-center flex justify-between grid-cols-3 gap-4">
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



                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure voluptatem placeat quaerat assumenda exercitationem est maiores doloribus laborum, debitis, quisquam dicta, nam consequuntur illum rerum fuga mollitia. Illum, sit!</p>


                    {/*    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div> */}
                </div>
            </div>



        </div>
    );
};

export default Profile;