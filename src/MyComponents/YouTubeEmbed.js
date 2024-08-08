import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const YouTubeEmbed = ({ videoId, index, isPlaying, onPlay }) => {
    const playerRef = useRef(null);

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: isPlaying ? 1 : 0,  // Autoplay if isPlaying is true
            controls: 1,
            modestbranding: 1,
            loop: 0,
            rel: 0,
        }
    };

    return (
        <div style={{ margin: '.2rem', width: '20rem', height: '12rem' }}>
            <YouTube
                videoId={videoId}
                onPlay={(event) => onPlay(event, index)}
                opts={opts}
            />
        </div>
    );
};

export default YouTubeEmbed;
