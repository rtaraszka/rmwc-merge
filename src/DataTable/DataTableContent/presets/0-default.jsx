import * as React from "react";
import DataTableContent from "../DataTableContent";
import DataTableHead from "../../DataTableHead";
import DataTableRow from "../../DataTableRow";
import DataTableHeadCell from "../../DataTableHeadCell";
import DataTableCell from "../../DataTableCell";
import DataTableBody from "../../DataTableBody";

export default (
  <DataTableContent uxpId="1">
    <DataTableHead uxpId="2">
      <DataTableRow uxpId="3">
        <DataTableHeadCell uxpId="4">Item</DataTableHeadCell>
        <DataTableHeadCell
          uxpId="5"
          alignEnd
        >
          Quantity (Click Me)
        </DataTableHeadCell>
        <DataTableHeadCell
          uxpId="6"
          alignEnd
        >
          Unit price
        </DataTableHeadCell>
      </DataTableRow>
    </DataTableHead>
    <DataTableBody uxpId="7">
      <DataTableRow uxpId="8">
        <DataTableCell uxpId="9">Cookies</DataTableCell>
        <DataTableCell alignEnd uxpId="10">25</DataTableCell>
        <DataTableCell alignEnd uxpId="11">$2.90</DataTableCell>
      </DataTableRow>
      <DataTableRow activated uxpId="12">
        <DataTableCell uxpId="13">Pizza</DataTableCell>
        <DataTableCell alignEnd uxpId="14">50</DataTableCell>
        <DataTableCell alignEnd uxpId="15">$1.25</DataTableCell>
      </DataTableRow>
      <DataTableRow uxpId="16">
        <DataTableCell uxpId="17">Icecream</DataTableCell>
        <DataTableCell alignEnd uxpId="18">10</DataTableCell>
        <DataTableCell alignEnd uxpId="19">$2.35</DataTableCell>
      </DataTableRow>
    </DataTableBody>
  </DataTableContent>
);
