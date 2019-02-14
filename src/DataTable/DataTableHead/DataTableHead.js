import React from "react";
import PropTypes from "prop-types";
import { DataTableHead as DataTableHeadM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTableHead(props) {
  return (
      <DataTableHeadM {...props} onClick={props.onClick}>
        {props.children}
      </DataTableHeadM>
  );
}

DataTableHead.propTypes = {
    children: PropTypes.node,
};

export { DataTableHead as default };
