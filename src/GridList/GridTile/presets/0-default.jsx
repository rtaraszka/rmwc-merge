import * as React from "react";
import GridTile from "../GridTile";
import Card from "../../../Cards/Card";
import CardMedia from "../../../Cards/CardMedia";
import CardActionIcons from "../../../Cards/CardActionIcons";
import CardAction from "../../../Cards/CardAction";

export default (
  <GridTile uxpId="1">
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
  </GridTile>
);
