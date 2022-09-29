import React from 'react';
import './Main.css'

const Main = (props) => {
    const { name, age, time, about } = props.person;


    return (
        <div>
            <div className="card mt-5 w-48 h-full bg-red-500 shadow-xl">
                <figure className="">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl h-40 w-60 " />
                </figure>
                <div className="">
                    <div className='p-2  '>
                        <p className='text-xl'><b>Name : </b>{name}</p>
                        <p><b>Details :</b> {about.slice(0, 50)} .</p>
                        <h1><b>For Age :</b> {age}</h1>
                        <h2><b>Time required :</b> {time}</h2>
                        <button className='mt-2  btn bg-green-400 text-2xl text-red-700'>Add To List</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Main;