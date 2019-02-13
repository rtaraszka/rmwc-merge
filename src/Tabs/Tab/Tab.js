import React from "react";
import PropTypes from "prop-types";
import { Tab as TabM } from '@rmwc/tabs';
import '@material/tab/dist/mdc.tab.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

function Tab(props) {
  return (
      <TabM {...props} onClick={props.onClick}>
        {props.children}
      </TabM>
  );
}

Tab.propTypes = {
    children: PropTypes.node,
    label: PropTypes.node,
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    stacked: PropTypes.bool,
    restrictIndicator: PropTypes.bool,
};

export { Tab as default };
