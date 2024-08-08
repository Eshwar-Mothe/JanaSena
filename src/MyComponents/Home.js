import React from 'react'
// import { Button } from 'react-bootstrap';
import Slider from './slider';
import "./Home_page.css";
import { Videos } from './Videos';
// import { VideoGallery } from './VideoGallery';
import { Link } from 'react-router-dom';
import { PhotoGallery } from './Photos/PhotoGallery';

function Home() {
    return (
        <>
            <div>
                {/* <Button>Click me</Button> */}
                <Slider />
            </div>

            <div className='PhotoGallery'><PhotoGallery /></div>


            <Link to="VideoGallery" style={{ textDecoration: 'none', border: '2px solid' }}>
                <p className='heading' >Video-Gallery
                    <span> watchMore &rarr; </span></p>
                <div><Videos /></div>

            </Link>
            {/* <div className='PhotoGallery'><PhotoGallery /></div> */}





        </>
    )
}

export default Home