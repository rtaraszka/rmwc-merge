import * as React from "react";
import GridTilePrimary from "../GridTilePrimary";
import GridTilePrimaryContent from "../../GridTilePrimaryContent";
import CardMediaContent from "../../../Cards/CardMediaContent";

export default (
    <GridTilePrimary uxpId="0">
      <GridTilePrimaryContent uxpId="1">
        <CardMediaContent
          uxpId="2"
          style={{
            backgroundImage:
              "url(https://material-components-web.appspot.com/images/16-9.jpg)"
          }}
        />
      </GridTilePrimaryContent>
    </GridTilePrimary>
);
