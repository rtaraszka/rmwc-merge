import React from "react";
import PropTypes from "prop-types";
import { DataTableBody as DataTableBodyM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTableBody(props) {
  return (
      <DataTableBodyM {...props} onClick={props.onClick}>
        {props.children}
      </DataTableBodyM>
  );
}

DataTableBody.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export { DataTableBody as default };
