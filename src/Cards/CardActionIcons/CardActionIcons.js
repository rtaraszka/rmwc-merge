import React from "react";
import PropTypes from "prop-types";
import { CardActionIcons as CardActionIconsM } from '@rmwc/card';

function CardActionIcons(props) {
  return (
      <CardActionIconsM {...props}>
        {props.children}
      </CardActionIconsM>
  );
}

CardActionIcons.propTypes = {
    children: PropTypes.node
};

export { CardActionIcons as default };
