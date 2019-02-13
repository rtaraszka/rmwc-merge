import * as React from "react";
import CardActions from "../CardActions";
import CardActionIcons from "../../CardActionIcons";
import CardAction from "../../CardAction";

export default (
  <CardActions uxpId="0">
    <CardActionIcons uxpId="1">
      <CardAction onIcon="favorite" icon="favorite_border" uxpId="2" />
      <CardAction icon="bookmark_border" uxpId="3"/>
      <CardAction icon="share" uxpId="4" />
    </CardActionIcons>
  </CardActions>
);
