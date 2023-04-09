import React from "react";
const singlePicture = "/pictures/web_banner_14Dec.jpg";

function AdsImage() {
  return (
    <div className="img">
      <div className="d-flex justify-content-center container">
        <img src={singlePicture} alt="" />
      </div>
    </div>
  );
}
export default AdsImage;
