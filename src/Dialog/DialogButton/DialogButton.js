import React from "react";
import PropTypes from "prop-types";
import { DialogButton as DialogButtonM } from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';

function DialogButton(props) {
  return (
      <DialogButtonM {...props}>
        {props.children}
      </DialogButtonM>
  );
}

DialogButton.propTypes = {
    children: PropTypes.node,
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    unelevated: PropTypes.bool,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
    className: PropTypes.string,
    action: PropTypes.string,
    isDefaultAction: PropTypes.bool
};

export { DialogButton as default };