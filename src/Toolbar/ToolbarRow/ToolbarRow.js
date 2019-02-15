import React from "react";
import PropTypes from "prop-types";
import { ToolbarRow as ToolbarRowM } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

function ToolbarRow(props) {
  return (
      <ToolbarRowM {...props}>
        {props.children}
      </ToolbarRowM>
  );
}

ToolbarRow.propTypes = {
    children: PropTypes.node
};

export { ToolbarRow as default };
