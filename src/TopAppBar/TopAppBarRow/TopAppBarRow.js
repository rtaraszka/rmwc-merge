import React from "react";
import PropTypes from "prop-types";
import { TopAppBarRow as TopAppBarRowM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function TopAppBarRow(props) {
  return (
      <TopAppBarRowM {...props} />
  );
}

TopAppBarRow.propTypes = {
    children: PropTypes.node
};

export { TopAppBarRow as default };