import React, { memo } from "react";
import PropTypes from "prop-types";
import { SubHeaderWrapper } from "./style";

const ThemeSubHeaderRecommend = memo(function (props) {
  return (
    <SubHeaderWrapper>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="right">{props.right}</div>
      </div>
    </SubHeaderWrapper>
  );
});

ThemeSubHeaderRecommend.prototypes = {
  title: PropTypes.string.isRequired,
  right: PropTypes.string,
};

export default ThemeSubHeaderRecommend;
