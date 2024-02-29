import React, { useEffect } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInitialAndSearchVideos } from "../utils/videosslice";

const Videocontainer = () => {
  const dispatch = useDispatch();
  const fetchVideo = useSelector((store) => store.videos.videos);
  const getVideos = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addInitialAndSearchVideos(json.items));
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap  justify-center">
      {fetchVideo[0] && <AdVideoCard info={fetchVideo[0]} />}
      {fetchVideo.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
