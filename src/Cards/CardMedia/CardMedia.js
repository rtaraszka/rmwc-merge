import React from "react";
import PropTypes from "prop-types";
import { CardMedia as CardMediaM } from '@rmwc/card';

function CardMedia(props) {
  return (
      <CardMediaM {...props}>
        {props.children}
      </CardMediaM>
  );
}

CardMedia.propTypes = {
    square: PropTypes.bool,
    sixteenByNine: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node
};

export { CardMedia as default };
