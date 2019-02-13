import React from "react";
import PropTypes from "prop-types";
import { ImageListSupporting as ImageListSupportingM } from '@rmwc/image-list';

function ImageListSupporting(props) {
  return (
      <ImageListSupportingM {...props}>
        {props.children}
      </ImageListSupportingM>
  );
}

ImageListSupporting.propTypes = {
    children: PropTypes.node
};

export { ImageListSupporting as default };
