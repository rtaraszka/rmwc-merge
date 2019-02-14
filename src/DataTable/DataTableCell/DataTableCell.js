import React from "react";
import PropTypes from "prop-types";
import { DataTableCell as DataTableCellM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTableCell(props) {
  return (
      <DataTableCellM {...props} onClick={props.onClick}>
        {props.children}
      </DataTableCellM>
  );
}

DataTableCell.propTypes = {
    children: PropTypes.node,
    alignStart: PropTypes.bool,
    alignMiddle: PropTypes.bool,
    alignEnd: PropTypes.bool,
    style: PropTypes.object
};

export { DataTableCell as default };
