import React from "react";
import PropTypes from "prop-types";
import { DataTable as DataTableM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTable(props) {
  return (
      <DataTableM {...props} onClick={props.onClick}>
        {props.children}
      </DataTableM>
  );
}

DataTable.propTypes = {
    children: PropTypes.node,
    stickyRows: PropTypes.number,
    stickyColumns: PropTypes.number,
    style: PropTypes.object
};

export { DataTable as default };
