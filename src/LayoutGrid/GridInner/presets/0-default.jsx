import * as React from "react";
import GridInner from "../GridInner";
import GridCell from "../../GridCell";

export default (
  <GridInner uxpId="0">
    <GridCell span="4" uxpId="1">1</GridCell>
    <GridCell span="4" uxpId="2">2</GridCell>
    <GridCell span="4" uxpId="3"> 
      <GridInner uxpId="4">
        <GridCell span="4" uxpId="5">a</GridCell>
        <GridCell span="4" uxpId="6">b</GridCell>
        <GridCell span="4" uxpId="7">c</GridCell>
      </GridInner>
    </GridCell>
  </GridInner>
);
