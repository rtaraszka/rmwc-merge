import React from "react";
import PropTypes from "prop-types";
import { ImageList as ImageListM } from '@rmwc/image-list';
import '@material/image-list/dist/mdc.image-list.css';

function ImageList(props) {
  return (
      <ImageListM {...props}>
        {props.children}
      </ImageListM>
  );
}

ImageList.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    masonry: PropTypes.bool,
    withTextProtection: PropTypes.bool
};

export { ImageList as default };