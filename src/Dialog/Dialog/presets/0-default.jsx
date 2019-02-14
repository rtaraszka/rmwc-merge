import * as React from "react";
import Dialog from "../Dialog";
import DialogTitle from "../../DialogTitle";
import DialogActions from "../../DialogActions";
import DialogContent from "../../DialogContent";
import DialogButton from "../../DialogButton";

export default (
  <Dialog
  uxpId="0"
  open={false}
  style={{"marginTop": "15%", "marginRight": "40%"}}
>    
  <DialogTitle uxpId="1">Dialog Title</DialogTitle>
  <DialogContent uxpId="2">This is a standard dialog.</DialogContent>
  <DialogActions uxpId="3">
    <DialogButton uxpId="4" action="close">Cancel</DialogButton>
    <DialogButton uxpId="5" action="accept" isDefaultAction>Sweet!</DialogButton>
  </DialogActions>
</Dialog>
);
