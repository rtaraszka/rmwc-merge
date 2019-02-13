import React from "react";
import PropTypes from "prop-types";
import { ImageListLabel as ImageListLabelM } from '@rmwc/image-list';

function ImageListLabel(props) {
  return (
      <ImageListLabelM {...props}>
        {props.children}
      </ImageListLabelM>
  );
}

ImageListLabel.propTypes = {
    children: PropTypes.node
};

export { ImageListLabel as default };
