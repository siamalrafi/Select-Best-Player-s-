import React from 'react';
import Main from '../Main/Main';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">

                <div className="col-span-2">
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



                <div>
                    <p className='ml-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint voluptas, vero deserunt temporibus distinctio, quo praesentium quaerat facere necessitatibus, ea sapiente architecto numquam sequi error odit dolorum inventore ipsam veniam?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;