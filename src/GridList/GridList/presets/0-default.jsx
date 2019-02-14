import * as React from "react";
import GridList from "../GridList";
import GridTile from "../../GridTile";
import Card from "../../../Cards/Card";
import CardMedia from "../../../Cards/CardMedia";
import CardActionIcons from "../../../Cards/CardActionIcons";
import CardAction from "../../../Cards/CardAction";

/**  import GridTilePrimary from "../../GridTilePrimary"
import GridTilePrimaryContent from "../../GridTilePrimaryContent"
import GridTileSecondary from "../../GridTileSecondary"
import GridTileIcon from "../../GridTileIcon"
import GridTileTitle from "../../GridTileTitle" */

export default (
  <GridList uxpId="0" tileAspect="1x1" style={{"margin": "auto"}}>
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
    <GridTile uxpId="11">
    <Card uxpId="02975648908">
    <CardMedia
      uxpId="2"
      sixteenByNine
      style={{
        backgroundImage:
          "url(https://material-components-web.appspot.com/images/16-9.jpg)"
      }}
    />
    <CardActionIcons uxpId="19">
      <CardAction onIcon="favorite" icon="favorite_border" uxpId="10" />
      <CardAction icon="share" uxpId="111" />
      <CardAction icon="more_vert" uxpId="121" />
    </CardActionIcons>
  </Card>
    </GridTile>
    <GridTile uxpId="1111">
    <Card uxpId="02975648908">
    <CardMedia
      uxpId="1112"
      sixteenByNine
      style={{
        backgroundImage:
          "url(https://material-components-web.appspot.com/images/16-9.jpg)"
      }}
    />
    <CardActionIcons uxpId="1119">
      <CardAction onIcon="favorite" icon="favorite_border" uxpId="11110" />
      <CardAction icon="share" uxpId="11112311" />
      <CardAction icon="more_vert" uxpId="3123123" />
    </CardActionIcons>
  </Card>
    </GridTile>
  </GridList>
);
