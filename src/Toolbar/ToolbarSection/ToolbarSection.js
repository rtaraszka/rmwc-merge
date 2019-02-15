import React from "react";
import PropTypes from "prop-types";
import { ToolbarSection as ToolbarSectionM } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

function ToolbarSection(props) {
  return (
      <ToolbarSectionM {...props}>
        {props.children}
      </ToolbarSectionM>
  );
}

ToolbarSection.propTypes = {
    children: PropTypes.node,
    alignStart: PropTypes.bool,
    alignEnd: PropTypes.bool,
    shrinkToFit: PropTypes.bool
};

export { ToolbarSection as default };
