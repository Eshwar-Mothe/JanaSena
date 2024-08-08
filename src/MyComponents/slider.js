import Carousel from 'react-bootstrap/Carousel';
import './slider.css'

function Sliders() {

    return (
        <Carousel data-bs-theme="dark" style={{ marginTop: '.1rem' }}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="https://i.pinimg.com/736x/f6/35/61/f635619f34db62b9b5c002a870c40489.jpg"
                    alt="First slide"
                    id='eshwar'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="https://wallpapers.com/images/featured/janasena-party-qxbqux4yll4ut0yp.jpg"
                    alt="Second slide"
                    id='eshwar'

                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8c9d8e165926781.64101e67043d5.jpg"
                    alt="Third slide"
                    id='eshwar'
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Sliders;