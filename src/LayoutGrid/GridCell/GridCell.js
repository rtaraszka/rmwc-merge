import React from "react";
import PropTypes from "prop-types";
import { GridCell as GridCellM } from '@rmwc/grid';
import '@material/layout-grid/dist/mdc.layout-grid.css';

function GridCell(props) {
  return (
      <GridCellM {...props}>
        {props.children}
      </GridCellM>
  );
}

GridCell.propTypes = {
    children: PropTypes.node,
    span: PropTypes.number,
    phone: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    order: PropTypes.number,
    align: PropTypes.oneOf(['top', 'middle', 'bottom'])
};

export { GridCell as default };
