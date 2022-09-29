import React from 'react';
import './Main.css';
import { addToDb } from '../../FakeDb/FakeDb.js';

const Main = (props) => {
    const { id, name, age, time, about, picture } = props.person;

    const addToCart = () => {
        addToDb(id);
    }


    
    // const addToCart = () => {
    //     addToDb(id);
    // }

    return (
        <div>
            <div className="card mt-5 relative h-[400px] w-48  bg-red-500 shadow-xl">
                <figure className="">
                    <img src={picture} alt="Shoes" className="rounded-xl h-40 w-60 " />
                </figure>
                <div>
                    <div className='p-3'>
                        <p className='text-xl'><b>Name : </b>{name}</p>
                        <p><b>Details :</b> {about.slice(0, 50)} .</p>
                        <h1><b>For Age :</b> {age}</h1>
                        <h2><b>Time required :</b> {time}</h2>
                    </div>
                    <button onClick={() => addToCart(id)} className='mt-2 w-full absolute bottom-0 btn bg-green-400 text-2xl text-red-700'>Add To List</button>
                </div>
            </div>


        </div>
    );
};

export default Main;