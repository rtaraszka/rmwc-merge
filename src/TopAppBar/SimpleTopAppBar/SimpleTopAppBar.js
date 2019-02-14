import React from "react";
import PropTypes from "prop-types";
import { SimpleTopAppBar as SimpleTopAppBarM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function SimpleTopAppBar(props) {
  return (
      <SimpleTopAppBarM {...props} />
  );
}

SimpleTopAppBar.propTypes = {
    title: PropTypes.node,
    actionItems: PropTypes.object,
    navigationIcon: PropTypes.object,
    startContent: PropTypes.node,
    endContent: PropTypes.node,
    onNav: PropTypes.func,
    fixed: PropTypes.bool,
    prominent: PropTypes.bool,
    short: PropTypes.bool,
    shortCollapsed: PropTypes.bool,
    dense: PropTypes.bool,
};

export { SimpleTopAppBar as default };