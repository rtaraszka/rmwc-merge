import React from "react";
import PropTypes from "prop-types";
import { TopAppBar as TopAppBarM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function TopAppBar(props) {
  return (
      <TopAppBarM {...props}>
        {props.children}
      </TopAppBarM>
  );
}

TopAppBar.propTypes = {
    onNav: PropTypes.func,
    fixed: PropTypes.bool,
    prominent: PropTypes.bool,
    short: PropTypes.bool,
    shortCollapsed: PropTypes.bool,
    dense: PropTypes.bool,
    children: PropTypes.node
};

export { TopAppBar as default };