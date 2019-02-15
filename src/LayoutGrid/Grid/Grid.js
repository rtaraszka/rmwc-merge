import React from "react";
import PropTypes from "prop-types";
import { Grid as GridM } from '@rmwc/grid';
import '@material/layout-grid/dist/mdc.layout-grid.css';

function Grid(props) {
  return (
      <GridM {...props}>
        {props.children}
      </GridM>
  );
}

Grid.propTypes = {
    children: PropTypes.node,
    fixedColumnWidth: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'right'])
};

export { Grid as default };
