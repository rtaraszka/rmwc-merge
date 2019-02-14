import * as React from "react";
import List from "../List";
import SimpleListItem from "../../SimpleListItem/SimpleListItem";

export default (
  <List uxpId="0" twoline>
    <SimpleListItem
      uxpId="1"
      graphic="star_border"
      text="Cookies"
      secondaryText="Chocolate chip"
      meta="info"
    />
    <SimpleListItem
      uxpId="2"
      graphic="favorite_border"
      text="Pizza"
      secondaryText="Pepperoni"
      meta="info"
    />
    <SimpleListItem
      uxpId="3"
      graphic="mood"
      text="Icecream"
      secondaryText="Chocolate cookie dough"
      meta="info"
    />
  </List>
);
