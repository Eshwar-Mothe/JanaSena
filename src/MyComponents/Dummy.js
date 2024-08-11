import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTubeEmbed from './YouTubeEmbed';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    // const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const apiKey = process.env.REACT_APP_API_KEY;
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: AIzaSyC997gsijpcfRQkghU-LbxQ17y4pOZwDLc,
                        part: 'snippet',
                        maxResults: 12,
                        order: 'date',
                        channelId: 'UCrKevLQTcgUp2kZ-WE0pWZQ',
                        type: 'video'
                    }
                });
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const [currentPlayer, setCurrentPlayer] = useState(null);

    const onPlay = (event) => {
        const player = event.target;
        if (currentPlayer && currentPlayer !== player) {
            currentPlayer.pauseVideo();
        }
        setCurrentPlayer(player);
    };

    return (
        <div>
            <h2>Latest YouTube Videos</h2>
            <div className="video-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {videos.map((video, index) => (
                    <YouTubeEmbed
                        key={video.id.videoId}
                        videoId={video.id.videoId}
                        index={index}
                        // isPlaying={currentVideo === index}
                        onPlay={onPlay}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
