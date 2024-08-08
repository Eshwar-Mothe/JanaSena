import React from 'react'

export const Card = () => {
    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => {
            return images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('./NewsImages', false, /samp\d\.jpg/)); // Adjust regex pattern for filenames

    return (
        <>
            <div className='headingCard'>
                <div className="heading-image-container">
                    {Object.keys(images).map((image, index) => (
                        <img
                            key={index}
                            src={images[image]} // Ensure 'default' is correct for your setup
                            alt={`${index + 1}`}
                            className="heading-image"
                        />
                    ))}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque omnis, labore deserunt itaque sapiente! Eum iste tempore nam delectus, atque veritatis ullam cumque consectetur ad libero ea necessitatibus blanditiis</p>
                    <button>ReadMore</button>
                </div>
            </div>
        </>
    )
}

