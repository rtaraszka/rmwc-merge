import React from "react";
import PropTypes from "prop-types";
import { ToolbarMenuIcon as ToolbarMenuIconM } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

function ToolbarMenuIcon(props) {
  return (
      <ToolbarMenuIconM {...props} />
  );
}

ToolbarMenuIcon.propTypes = {
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
};

export { ToolbarMenuIcon as default };
