import React from "react";
import PropTypes from "prop-types";
import { DialogTitle as DialogTitleM } from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';

function DialogTitle(props) {
  return (
      <DialogTitleM {...props}>
        {props.children}
      </DialogTitleM>
  );
}

DialogTitle.propTypes = {
    children: PropTypes.node,
};

export { DialogTitle as default };