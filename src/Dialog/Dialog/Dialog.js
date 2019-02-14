import React from "react";
import PropTypes from "prop-types";
import { Dialog as DialogM } from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';

function Dialog(props) {
  return (
      <DialogM {...props}>
        {props.children}
      </DialogM>
  );
}

Dialog.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onStateChange: PropTypes.func,
    style: PropTypes.object
};

export { Dialog as default };