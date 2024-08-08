import React, { useState, useRef } from 'react';
import "./Home_page.css";
import YouTube from 'react-youtube';

export const VideoGallery = () => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const playersRef = useRef([]);

    const videoList = [
        "ALPBP2XkitA",
        "rqHvlEjqFs4",
        "P85JjfceLBs",
        "84bbBWSVSjQ",
        "gSXyRfPg9tk"

        // Add more video IDs as needed
    ];

    const MyStyle = {
        // display: 'flex',
        // flexDirection: 'row',
        margin: '.5rem',
        width: '20rem',
        height: '10rem'
    }

    const onReady = (event, index) => {
        playersRef.current[index] = event.target;
    };

    const onPlay = (event, index) => {
        if (currentVideo !== index) {
            pauseOtherVideos(index);
            setCurrentVideo(index);
        }
    };

    const pauseOtherVideos = (index) => {
        playersRef.current.forEach((player, idx) => {
            if (idx !== index && player) {
                player.pauseVideo();
            }
        });
    };

    return (
        <div style={{ marginTop: '.5rem', display: 'flex', flexWrap: 'wrap' }}>
            {videoList.map((videoId, index) => (
                <div key={index} style={MyStyle}>
                    <YouTube

                        videoId={videoId}
                        onReady={(event) => onReady(event, index)}
                        onPlay={(event) => onPlay(event, index)}
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                // Your playerVars options here
                                autoplay: 0,
                                controls: 1,
                                modestbranding: 1,
                                loop: 0,
                                rel: 0,
                            }
                        }}
                    />
                </div>
            ))}
        </div>
    )
}
