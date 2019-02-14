import React from "react";
import PropTypes from "prop-types";
import { DataTableContent as DataTableContentM } from '@rmwc/data-table';
import '@rmwc/data-table/data-table.css';

function DataTableContent(props) {
  return (
      <DataTableContentM {...props} onClick={props.onClick}>
        {props.children}
      </DataTableContentM>
  );
}

DataTableContent.propTypes = {
    children: PropTypes.node,
};

export { DataTableContent as default };
