import React from "react";
import PropTypes from "prop-types";
import { SimpleDialog as SimpleDialogM } from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';

function SimpleDialog(props) {
  return (
      <SimpleDialogM {...props}>
        {props.children}
      </SimpleDialogM>
  );
}

SimpleDialog.propTypes = {
    title: PropTypes.node,
    header: PropTypes.node,
    body: PropTypes.node,
    footer: PropTypes.node,
    acceptLabel: PropTypes.node,
    cancelLabel: PropTypes.node,
    children: PropTypes.node,
    scrollable: PropTypes.bool,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onStateChange: PropTypes.func,
    style: PropTypes.object
};

export { SimpleDialog as default };