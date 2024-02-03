import React from 'react'
import "./Banner.css"
import ban1 from "../../../assets/bann1.jpg"
import ban2 from "../../../assets/bann2.jpg"
import ban3 from "../../../assets/bann3.jpg"
import ban4 from "../../../assets/bann4.jpg"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {

    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center py-0 my-0 display-3'><strong>GOOD &nbsp; FOOD</strong></h1>
                <p className='text-center my-0 py-0 lead'><i>Its Your Place</i></p>
            </div>
            <div className='carousel'>
                <Carousel
                    infiniteLoop
                    autoPlay
                    autoFocus
                    emulateTouch
                    interval="3000"
                >
                    <div style={{ position: 'relative' }}>
                        <img src={ban2} style={{ width: '100%', height: '500px' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (last value) to your liking
                        }}></div>
                        <p className="legend">Cuisine 2</p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={ban3} style={{ width: '100%', height: '500px' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (last value) to your liking
                        }}></div>
                        <p className="legend">Cuisine 3</p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={ban4} style={{ width: '100%', height: '500px' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (last value) to your liking
                        }}></div>
                        <p className="legend">Cuisine 4</p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={ban1} style={{ width: '100%', height: '500px' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (last value) to your liking
                        }}></div>
                        <p className="legend">Cuisine 1</p>
                    </div>
                    
                </Carousel>
            </div>
        </div>
    )
}

export default Banner