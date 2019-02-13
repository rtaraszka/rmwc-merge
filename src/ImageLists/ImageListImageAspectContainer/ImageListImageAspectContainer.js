import React from "react";
import PropTypes from "prop-types";
import { ImageListImageAspectContainer as ImageListImageAspectContainerM } from '@rmwc/image-list';

function ImageListImageAspectContainer(props) {
  return (
      <ImageListImageAspectContainerM {...props}>
        {props.children}
      </ImageListImageAspectContainerM>
  );
}

ImageListImageAspectContainer.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export { ImageListImageAspectContainer as default };