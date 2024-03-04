import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex px-5 w-full">
        <div className="ml-[90px]">
        <iframe
         class="rounded-lg overflow-hidden"
         width="1000"
         height="550"
         src={"https://www.youtube.com/embed/" + queryParams.get("v")}
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
       ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
