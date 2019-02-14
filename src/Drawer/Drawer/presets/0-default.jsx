import * as React from "react";
import Drawer from "../Drawer";
import DrawerTitle from "../../DrawerTitle";
import DrawerContent from "../../DrawerContent";
import DrawerHeader from "../../DrawerHeader";
import DrawerSubtitle from "../../DrawerSubtitle";
import List from "../../../Lists/List";
import ListItem from "../../../Lists/ListItem";

export default (
  <Drawer uxpId="0">
    <DrawerHeader uxpId="1">
      <DrawerTitle uxpId="2">DrawerHeader</DrawerTitle>
      <DrawerSubtitle uxpId="3">Subtitle</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent uxpId="4">
      <List uxpId="5">
        <ListItem uxpId="6">Cookies</ListItem>
        <ListItem uxpId="7">Pizza</ListItem>
        <ListItem uxpId="8">Icecream</ListItem>
      </List>
    </DrawerContent>
  </Drawer>
);
