import React from 'react';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                {/* this is the left side */}

                <div className="col-span-2 bg-base-200 text-black">
                    <div className="mt-8 navbar text-green-900">
                        <a href='/' className="btn btn-ghost normal-case text-xl">
                            <h1>BE ACTIVE BE POWERFUL</h1>
                        </a>
                    </div>
                    <div className='m-3 ml-8' >
                        <h1 className='mt-1'>Select Your Choose.</h1>
                        <Main></Main>
                    </div>
                </div>


                {/* this is the right side */}

                <div className='ml-20'>

                    <Profile></Profile>



                </div>
            </div>
        </div>
    );
};

export default Header;