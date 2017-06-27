import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="video-list-item box">
            <div className="video-list ">
                <div className="media-left">
                    <img src={imageUrl} />
                </div>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>{video.snippet.title}</p>
                </div>
            </div>
        </li>
    
    );
};

export default VideoListItem;