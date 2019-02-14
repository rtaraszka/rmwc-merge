import * as React from "react";
import Card from "../Card";
import CardMedia from "../../CardMedia/CardMedia";
import CardAction from "../../CardAction/CardAction";
import CardActionIcons from "../../CardActionIcons/CardActionIcons";

export default (
  <Card uxpId="02975648908">
    <CardMedia
      uxpId="2"
      sixteenByNine
      style={{
        backgroundImage:
          "url(https://material-components-web.appspot.com/images/16-9.jpg)"
      }}
    />
    <CardActionIcons uxpId="9">
      <CardAction onIcon="favorite" icon="favorite_border" uxpId="10" />
      <CardAction icon="share" uxpId="11" />
      <CardAction icon="more_vert" uxpId="12" />
    </CardActionIcons>
  </Card>
);
