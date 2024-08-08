import React, { useState } from 'react';
import './Photos.css';

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
        return images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('./Party', false, /samp\d\.jpg/)); // Adjust regex pattern for filenames

export const PartyImages = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openFullscreen = (imageUrl) => {
        setFullscreenImage(imageUrl);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div className="image-gallery-container">
            {Object.keys(images).map((image, index) => (
                <img
                    key={index}
                    src={images[image]} // Ensure 'default' is correct for your setup
                    alt={`${index + 1}`}
                    className="gallery-image"
                    onClick={() => openFullscreen(images[image])}
                />
            ))}

            {fullscreenImage && (
                <div className="fullscreen-container" onClick={closeFullscreen}>
                    <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
                </div>
            )}
        </div>
    );
};
