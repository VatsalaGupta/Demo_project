import React from 'react'
import './OnePage.css';

const OnePage = () => {

    return (
        <div>
            <div>
                <h5 className='h3'>Sneak Peak of Sanskriti College of Ayurvedic Medical Science</h5>
                <h5 className='h31'>Medical College and Hospital Campus</h5>
            </div>
            <div class="container text-center">
                <div className="row row-cols-3"style={{padding:"38px"}} >
                    <div className="col"><img src='../Image/1.jpeg' style={{ width: "20rem" }}></img></div>
                    <div className="col"><img src='./Image/2.jpeg' style={{ width: "20rem" }}></img></div>
                    <div className="col"><img src='./Image/3.jpeg' style={{ width: "20rem" }}></img></div>

                </div>

                <div className="row row-cols-3" style={{padding:"18px"}}>
                    <div className="col"><img src='./Image/5.jpeg' style={{ width: "20rem" }}></img></div>
                    <div className="col"><img src='./Image/6.jpeg' style={{ width: "20rem" }}></img></div>
                    <div className="col"><img src='./Image/7.jpeg' style={{ width: "20rem" }}></img></div>

                </div>
                <div className="row row-cols-1" style={{padding:"18px"}}>
                    <div className="col"><img src='./Image/8.jpeg ' style={{width:"69rem"}}></img></div>
                </div>
                <div>
                    <h6 className='h4'>ONLY 17 SEATS LEFT!- <span className='spanyellow'> Without Donation</span></h6>
                </div>
            </div>
        </div>
    )
}

export default OnePage