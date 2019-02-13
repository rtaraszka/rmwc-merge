import React from "react";
import PropTypes from "prop-types";
import { CardMediaContent as CardMediaContentM } from '@rmwc/card';

function CardMediaContent(props) {
  return (
      <CardMediaContentM {...props}>
        {props.children}
      </CardMediaContentM>
  );
}

CardMediaContent.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object

};

export { CardMediaContent as default };
