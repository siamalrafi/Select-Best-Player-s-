import React, { useEffect, useState } from 'react';
import { addToDb } from '../../FakeDb/FakeDb';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import './Header.css';




const Header = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, []);

    const addToCart = (id) => {
        addToDb(id);
    }



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
                    </div>
                    <div className='m-3 ml-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        {
                            persons.map(person => <Main
                                addToCart={addToCart}
                                person={person}
                                key={person.id}
                            ></Main>)
                        }
                    </div>
                </div>



















                {/* this is the right side */}
                {/* must sticky top-0   
                ---------------
                ----------
                --------
                  next line */}
                <div className='ml-10'>

                    <Profile></Profile>


                </div>
            </div>
        </div>
    );
};

export default Header;