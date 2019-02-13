import React from "react";
import PropTypes from "prop-types";
import { Card as CardM } from '@rmwc/card';
import '@material/card/dist/mdc.card.css';

function Card(props) {
  return (
      <CardM {...props}>
        {props.children}
      </CardM>
  );
}

Card.propTypes = {
    children: PropTypes.node,
    outlined: PropTypes.bool,
    style: PropTypes.object
};

export { Card as default };
