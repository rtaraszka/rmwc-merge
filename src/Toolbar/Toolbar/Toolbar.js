import React from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarM } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

function Toolbar(props) {
  return (
      <ToolbarM {...props}>
        {props.children}
      </ToolbarM>
  );
}

Toolbar.propTypes = {
    children: PropTypes.node,
    fixed: PropTypes.bool,
    waterfall: PropTypes.bool,
    fixedLastrowOnly: PropTypes.bool,
    flexible: PropTypes.bool,
    flexibleDefaultBehavior: PropTypes.bool
};

export { Toolbar as default };
