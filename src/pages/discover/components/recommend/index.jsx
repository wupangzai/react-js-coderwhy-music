import React, { memo } from "react";
import TopBanners from "./components/top-banners";

function Recommend(props) {
  return (
    <div>
      <TopBanners />
    </div>
  );
}

export default memo(Recommend);
