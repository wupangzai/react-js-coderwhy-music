import React, { memo, useEffect } from "react";
import { NewAlbumCardWrapper } from "./style";

export default memo(function NewAlbumCard(props) {
  useEffect(() => {
    const { item } = props;

    console.log(item);
  });

  const { item } = props;
  return (
    <NewAlbumCardWrapper>
      {item && (
        <div className="cover">
          <img src={item.picUrl} alt="" className="img" />
          <a href="#/todo" className="cover-white cover-type sprite_covor"></a>
          <a href="#/todo" className="cover-play sprite_icon"></a>
        </div>
      )}
      <div className="info">
        <a href="#todo" className="album-name text-nowrap">
          {item.name}
        </a>
        <a href="#todo" className="singer-name text-nowrap">
          {item.artist.name}
        </a>
      </div>
    </NewAlbumCardWrapper>
  );
});
