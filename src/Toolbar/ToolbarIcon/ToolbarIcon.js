import React from "react";
import PropTypes from "prop-types";
import { ToolbarIcon as ToolbarIconM } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

function ToolbarIcon(props) {
  return (
      <ToolbarIconM {...props} />
  );
}

ToolbarIcon.propTypes = {
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
};

export { ToolbarIcon as default };
