import React from "react";
import PropTypes from "prop-types";
import { ToolbarTitle as ToolbarTitleM } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

function ToolbarTitle(props) {
  return (
      <ToolbarTitleM {...props}>
        {props.children}
      </ToolbarTitleM>
  );
}

ToolbarTitle.propTypes = {
    children: PropTypes.node,
};

export { ToolbarTitle as default };
