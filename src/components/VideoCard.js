import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-[400px] h-[300px]">
      {thumbnails.medium.url && (
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
      )}
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {statistics && <li>{statistics.viewCount} views</li>}
      </ul>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
