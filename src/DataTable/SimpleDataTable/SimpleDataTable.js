import React from "react";
import PropTypes from "prop-types";
import { SimpleDataTable as SimpleDataTableM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function SimpleDataTable(props) {
  return (
      <SimpleDataTableM {...props} onClick={props.onClick}>
        {props.children}
      </SimpleDataTableM>
  );
}

SimpleDataTable.propTypes = {
    data: PropTypes.object,
    headers: PropTypes.object,
    getRowProps: PropTypes.func,
    getCellProps: PropTypes.func,
    stickyRows: PropTypes.number,
    stickyColumns: PropTypes.number,
    style: PropTypes.object
};

export { SimpleDataTable as default };