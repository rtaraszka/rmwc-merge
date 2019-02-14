import React from "react";
import PropTypes from "prop-types";
import { DataTableRow as DataTableRowM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTableRow(props) {
  return (
      <DataTableRowM {...props}>
        {props.children}
      </DataTableRowM>
  );
}

DataTableRow.propTypes = {
    children: PropTypes.node,
};

export { DataTableRow as default };
