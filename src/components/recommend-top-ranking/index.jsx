import React, { memo } from "react";
import { TopRankingWrapper } from "./style";

export default memo(function TopRanking(props) {
  const { item } = props;

  return (
    <TopRankingWrapper>
      <div className="top">
        <div className="img-content">
          <img src={item.coverImgUrl} alt="" />
          <a href="#todo" className="sprite_covor">
            {" "}
          </a>
        </div>
        <div className="description">
          <a className="title">{item.name}</a>
          <div className="btn">
            <a href="#todo" className="play sprite_02">
              {" "}
            </a>
            <a href="#todo" className="collect sprite_02">
              {" "}
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {item.tracks
          ?.filter((item, index) => index < 10)
          .map((item, index) => (
            <div className="list-item" key={item.id}>
              <span className={"index " + `${index < 3 ? "top-item" : ""}`}>
                {index + 1}
              </span>
              <a href="#todo" className="name text-nowrap">
                {item.name}
              </a>
              <span className="btn-action">
                <a href="#todo" className="hover-item play action sprite_02">
                  {" "}
                </a>
                <a href="#todo" className="hover-item add action sprite_icon2">
                  {" "}
                </a>
                <a href="#todo" className="hover-item collect action sprite_02">
                  {" "}
                </a>
              </span>
            </div>
          ))}
        <a href="#todo" className="bottom-link">
          查看全部&gt;
        </a>
      </div>
    </TopRankingWrapper>
  );
});
