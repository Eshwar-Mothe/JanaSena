import React, { useState } from 'react'
import YouTube from 'react-youtube'
import './Home_page.css';
export const Videos = () => {

    const [currentPlayer, setCurrentPlayer] = useState(null);

    const onPlay = (event) => {
        const player = event.target;
        if (currentPlayer && currentPlayer !== player) {
            currentPlayer.pauseVideo();
        }
        setCurrentPlayer(player);
    };

    return (
        <div className='video_container' style={{}}>
            {/* <a href="/"></a> */}
            <YouTube videoId='kObUO4gC8mI' className='videos' onPlay={onPlay} opts={{ playerVars: { rel: 0 } }} style={{}} />
            <YouTube videoId='51pCRRREvl0' className='videos' onPlay={onPlay} opts={{ playerVars: { rel: 0 } }} />
        </div>
    )
}
