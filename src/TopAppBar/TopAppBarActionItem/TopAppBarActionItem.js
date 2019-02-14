import React from "react";
import PropTypes from "prop-types";
import { TopAppBarActionItem as TopAppBarActionItemM } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

function TopAppBarActionItem(props) {
  return (
      <TopAppBarActionItemM {...props}>
        {props.children}
      </TopAppBarActionItemM>
  );
}

TopAppBarActionItem.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    alt: PropTypes.string

};

export { TopAppBarActionItem as default };