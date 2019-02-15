import React from "react";
import PropTypes from "prop-types";
import { GridInner as GridInnerM } from '@rmwc/grid';
import '@material/layout-grid/dist/mdc.layout-grid.css';

function GridInner(props) {
  return (
      <GridInnerM {...props}>
        {props.children}
      </GridInnerM>
  );
}

GridInner.propTypes = {
    children: PropTypes.node,
};

export { GridInner as default };
