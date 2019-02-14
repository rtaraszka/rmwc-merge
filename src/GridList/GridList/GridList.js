import React from "react";
import PropTypes from "prop-types";
import { GridList as GridListM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridList(props) {
  return (
      <GridListM {...props} onClick={props.onClick}>
        {props.children}
      </GridListM>
  );
}

GridList.propTypes = {
    children: PropTypes.node,
    tileGutter1: PropTypes.bool,
    headerCaption: PropTypes.bool,
    twolineCaption: PropTypes.bool,
    withIconAlignStart: PropTypes.bool,
    tileAspect: PropTypes.oneOf(['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'])
};

export { GridList as default };