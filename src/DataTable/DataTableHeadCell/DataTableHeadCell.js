import React from "react";
import PropTypes from "prop-types";
import { DataTableHeadCell as DataTableHeadCellM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTableHeadCell(props) {
  return (
      <DataTableHeadCellM {...props} onClick={props.onClick}>
        {props.children}
      </DataTableHeadCellM>
  );
}

DataTableHeadCell.propTypes = {
  sort: PropTypes.oneOf([null, -1, 1]),
  onSortChange: PropTypes.func,
  children: PropTypes.node,
  alignStart: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  alignEnd: PropTypes.bool
};

export { DataTableHeadCell as default };
