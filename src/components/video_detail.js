import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return ( 
        <div className="video-detail column is-half is-offset-one-quarter ">
            <div className="embed-responsive">
                <iframe className="embed-responsive-item embed-responsive-16by9" src={url}></iframe>
            </div>
            <div className="media-content">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;