import React from "react";
import PropTypes from "prop-types";
import { TabBar as TabBarM } from '@rmwc/tabs';
import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

function TabBar(props) {
  return (
      <TabBarM {...props} onClick={props.onClick}>
        {props.children}
      </TabBarM>
  );
}

TabBar.propTypes = {
    children: PropTypes.node,
    onActivate: PropTypes.func,
    activeTabIndex: PropTypes.number
};

export { TabBar as default };
