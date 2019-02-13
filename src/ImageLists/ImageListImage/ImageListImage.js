import React from "react";
import PropTypes from "prop-types";
import { ImageListImage as ImageListImageM } from '@rmwc/image-list';

function ImageListImage(props) {
  return (
      <ImageListImageM {...props}>
        {props.children}
      </ImageListImageM>
  );
}

ImageListImage.propTypes = {
    src: PropTypes.string
};

export { ImageListImage as default };