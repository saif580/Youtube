import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  const list = [
    "All",
    "Gaming",
    "Vegeta",
    "Apple",
    "Live",
    "Hogwarts",
    "Trailers",
    "Music",
  ];
  return (
    <div className="flex flex-warp">
      {list.map((btnName,index) => (
        <Button key={index} name={btnName} />
      ))}
    </div>
  );
};

export default Buttonlist;
