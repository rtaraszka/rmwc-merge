import React from "react";
import PropTypes from "prop-types";
import { TopAppBarNavigationIcon as TopAppBarNavigationIconM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function TopAppBarNavigationIcon(props) {
  return (
      <TopAppBarNavigationIconM {...props} />
  );
}

TopAppBarNavigationIcon.propTypes = {
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    alt: PropTypes.string

};

export { TopAppBarNavigationIcon as default };