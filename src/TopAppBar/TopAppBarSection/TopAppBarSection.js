import React from "react";
import PropTypes from "prop-types";
import { TopAppBarSection as TopAppBarSectionM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function TopAppBarSection(props) {
  return (
      <TopAppBarSectionM {...props}>
        {props.children}
      </TopAppBarSectionM>
  );
}

TopAppBarSection.propTypes = {
    children: PropTypes.node,
    alignStart: PropTypes.bool,
    alignEnd: PropTypes.bool
};

export { TopAppBarSection as default };