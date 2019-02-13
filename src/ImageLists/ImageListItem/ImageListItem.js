import React from "react";
import PropTypes from "prop-types";
import { ImageListItem as ImageListItemM } from '@rmwc/image-list';

function ImageListItem(props) {
  return (
      <ImageListItemM {...props}>
        {props.children}
      </ImageListItemM>
  );
}

ImageListItem.propTypes = {
    children: PropTypes.node,
    key: PropTypes.string,
    style: PropTypes.object
};

export { ImageListItem as default };