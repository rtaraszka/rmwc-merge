import React from "react";
import PropTypes from "prop-types";
import { DialogActions as DialogActionsM } from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';

function DialogActions(props) {
  return (
      <DialogActionsM {...props}>
        {props.children}
      </DialogActionsM>
  );
}

DialogActions.propTypes = {
    children: PropTypes.node,
};

export { DialogActions as default };