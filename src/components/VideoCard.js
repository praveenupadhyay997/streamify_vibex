import React from 'react'

const VideoCard = ({info}) => {
  const { snippet, statistics} = info;
  const{ channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-xl'>
        <img className='rounded-lg' alt='thumbnail_image' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold truncate-overflow' title={title}>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border-4 border-red-900">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;