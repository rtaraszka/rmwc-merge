import React from "react";
import PropTypes from "prop-types";
import { TopAppBarTitle as TopAppBarTitleM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function TopAppBarTitle(props) {
  return (
      <TopAppBarTitleM {...props}>
        {props.children}
      </TopAppBarTitleM>
  );
}

TopAppBarTitle.propTypes = {
    children: PropTypes.node,
};

export { TopAppBarTitle as default };