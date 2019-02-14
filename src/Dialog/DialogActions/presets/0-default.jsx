import * as React from "react";
import DialogActions from "../DialogActions";
import DialogButton from "../../DialogButton";

export default (
  <DialogActions uxpId="0">
    <DialogButton uxpId="1" action="close">Cancel</DialogButton>
    <DialogButton uxpId="2" action="accept" isDefaultAction>Sweet!</DialogButton>
  </DialogActions>
);
