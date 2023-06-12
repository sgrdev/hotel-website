import React from 'react'
import img from "../assets/background.jpg"
import Button from 'react-bootstrap/Button';

const Hero = () => {
    return (
        <>
            <div className="relative ">
                <img src={img} alt="" className='h-[90vh] w-[100vw] filter brightness-50 ' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-6xl font-bold text-white'>
                        A Memorable Experience
                    </h1>
                    <Button variant="primary" className='outline-none bg-purple-500 text-white rounded-none'>Reserve Now </Button>
                </div>

            </div>
        </>
    )
}

export default Hero