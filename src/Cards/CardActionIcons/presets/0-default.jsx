import * as React from "react";
import CardActionIcons from "../CardActionIcons";
import CardAction from "../../CardAction";

export default (
  <CardActionIcons uxpId="0">
      <CardAction
        uxpId="1"
        onIcon="favorite"
        icon="favorite_border"
      />
      <CardAction icon="share" uxpId="2" />
      <CardAction icon="more_vert" uxpId="3" />
  </CardActionIcons>
);
