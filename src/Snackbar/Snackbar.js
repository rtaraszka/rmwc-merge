import React from "react";
import PropTypes from "prop-types";
import { Snackbar as SnackbarM } from '@rmwc/snackbar';
import '@material/snackbar/dist/mdc.snackbar.css';

function Snackbar(props) {
  return (
      <SnackbarM {...props} />
  );
}

Snackbar.propTypes = {
    open: PropTypes.bool,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    message: PropTypes.node,
    timeout: PropTypes.number,
    actionHandler: PropTypes.func,
    multiline: PropTypes.bool,
    actionOnBottom: PropTypes.bool,
    dismissesOnAction: PropTypes.bool,
    leading: PropTypes.bool
};

export { Snackbar as default };
