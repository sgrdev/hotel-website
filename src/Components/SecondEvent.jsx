import React from 'react'
import img from "../assets/tables.jpg"
import Button from 'react-bootstrap/Button';

const SecondEvent = () => {
    return (
        <>
            <div className="relative ">
                <img src={img} alt="" className='h-[90vh] w-[100vw] filter brightness-50 ' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 text-white mb-10'>
                    <h1 className='text-6xl font-bold '>
                        Events & Weddings
                    </h1>
                    <p className='w-[75%] font-semibold'>
                    Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
                    </p>
                   
                </div>

            </div>
        </>
    )
}

export default SecondEvent