import * as React from "react";
import Toolbar from "../Toolbar";
import ToolbarRow from "../../ToolbarRow/ToolbarRow";
import ToolbarSection from "../../ToolbarSection/ToolbarSection";
import ToolbarMenuIcon from "../../ToolbarMenuIcon/ToolbarMenuIcon";
import ToolbarTitle from "../../ToolbarTitle/ToolbarTitle";
import ToolbarIcon from "../../ToolbarIcon/ToolbarIcon";

export default (
  <Toolbar uxpId="0">
    <ToolbarRow uxpId="1">
      <ToolbarSection alignStart uxpId="2">
        <ToolbarMenuIcon icon="menu" uxpId="3" />
        <ToolbarTitle uxpId="4">Toolbar</ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection alignEnd uxpId="5">
        <ToolbarIcon icon="save" uxpId="6" />
        <ToolbarIcon icon="print" uxpId="7" />
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);
