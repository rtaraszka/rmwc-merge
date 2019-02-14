import * as React from "react";
import ListGroup from "../ListGroup";
import ListItem from "../../ListItem/ListItem";
import ListItemGraphic from "../../ListItemGraphic/ListItemGraphic";
import ListItemMeta from "../../ListItemMeta/ListItemMeta";

export default (
  <ListGroup uxpId="0">
    <ListItem uxpId="1">
      <ListItemGraphic uxpId="2" icon="person" style={{ backgroundColor: "lightgray" }} />
      Bruce Wayne
      <ListItemMeta uxpId="3" icon="info" />
    </ListItem>
    <ListItem uxpId="4">
      <ListItemGraphic uxpId="5" icon="person" style={{ backgroundColor: "coral" }} />
      Clark Kent
      <ListItemMeta uxpId="6" icon="info" />
    </ListItem>
  </ListGroup>
);
