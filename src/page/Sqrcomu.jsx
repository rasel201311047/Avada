import React from 'react';
import im1 from "../assets/sq1.png"
import im2 from "../assets/slogo.png"
const Sqrcomu = () => {
    return (
        <div>
            <div className='d-lg-flex ' >
                <div className='col-lg-5'>
                    <img src={im1} className='w-100 h-100' alt="" />
                </div>
                <div className='pt-5 d-flex flex-column justify-content-center px-5 'style={{backgroundColor:"#ffe979"}}>
                    <h3 className=' '>“We choose to specialise in Avada because 
                        it is both functional and practical, 
                        and our clients simply love it! It has stood
                         the test of time and continues to evolve – 
                         an excellent solution for our talented design
                          team, who continue to push the boundaries.”</h3>
                    <hr />
                    <div className='d-flex gap-3 py-3'>
                        <img src={im2} style={{height:"10%"}} alt="" />
                        <h4  className='fs-4'>Squarebird</h4>
                    </div>
                    <a href="/">https://www.squarebird.co.uk</a>

                </div>
            </div>
        </div>
    );
};

export default Sqrcomu;