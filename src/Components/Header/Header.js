import React, { useEffect, useState } from 'react';
import { addToDb } from '../../FakeDb/FakeDb';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons'


let selectedArry = [];
let selectedTotalTime = 0;

const Header = () => {
    const [persons, setPersons] = useState([]);
    const [selectedTime, setSelectedTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, []);

    const [cart, setCart] = useState([]);
    const addToCart = (id, time) => {
        selectedArry.push(time);
        const totalTime = selectedArry.reduce((init, cost) => {
            return (init + cost);
        }, 0);
        selectedTotalTime = totalTime;
        setSelectedTime(selectedTotalTime);

        const newCart = [...cart, time];
        setCart(newCart);
        addToDb(id);
    };

    return (
        <div>

            <div className="grid lg:grid-cols-3 ">

                {/* this is the left side */}
                <div className="col-span-2 grid justify-items-center bg-base-200 text-black">
                    <div className="mt-8 navbar sm:justify-items-center text-green-900">
                        <a href='/' className="btn btn-ghost normal-case text-xl">
                            <h1 className='text-2xl pr-5'>
                                <FontAwesomeIcon className='text-3xl' icon={faSunPlantWilt} />
                            </h1>
                            <h1 className='text-2xl font-bold text-green-600-800'>
                                Health is Wealth
                            </h1>
                        </a>
                    </div>
                    <div className='m-3 ml-8' >
                        <h1 className='mt-1 text-2xl font-bold text-violet-800'>Select Your Choose.</h1>
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
                <div className='ml-10'>
                    <Profile selectedTime={selectedTime}></Profile>
                </div>
            </div>
        </div >
    );
};

export default Header;