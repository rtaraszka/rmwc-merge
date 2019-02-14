import * as React from "react";
import DataTable from "../DataTable";
import DataTableContent from "../../DataTableContent";
import DataTableHead from "../../DataTableHead";
import DataTableRow from "../../DataTableRow";
import DataTableHeadCell from "../../DataTableHeadCell";
import DataTableCell from "../../DataTableCell";
import DataTableBody from "../../DataTableBody";

export default (
<DataTable uxpId="0" style={{"width": "100%"}}>
  <DataTableContent uxpId="1" style={{"width": "100%"}}>
    <DataTableHead uxpId="2" style={{"width": "100%"}}>
      <DataTableRow uxpId="3" style={{"width": "100%"}}>
        <DataTableHeadCell uxpId="4" style={{"width": "100%"}}>Item</DataTableHeadCell>
        <DataTableHeadCell
          uxpId="5"
          alignEnd
          style={{"width": "100%"}}
        >
          Quantity (Click Me)
        </DataTableHeadCell>
        <DataTableHeadCell
          uxpId="6"
          alignEnd
          style={{"width": "100%"}}
        >
          Unit price
        </DataTableHeadCell>
      </DataTableRow>
    </DataTableHead>
    <DataTableBody uxpId="7" style={{"width": "100%"}}>
      <DataTableRow uxpId="8" style={{"width": "100%"}}>
        <DataTableCell uxpId="9" style={{"width": "100%"}}>Cookies</DataTableCell>
        <DataTableCell alignEnd uxpId="10" style={{"width": "100%"}}>25</DataTableCell>
        <DataTableCell alignEnd uxpId="11" style={{"width": "100%"}}>$2.90</DataTableCell>
      </DataTableRow>
      <DataTableRow activated uxpId="12" style={{"width": "100%"}}>
        <DataTableCell uxpId="13" style={{"width": "100%"}}>Pizza</DataTableCell>
        <DataTableCell alignEnd uxpId="14" style={{"width": "100%"}}>50</DataTableCell>
        <DataTableCell alignEnd uxpId="15" style={{"width": "100%"}}>$1.25</DataTableCell>
      </DataTableRow>
      <DataTableRow uxpId="16" style={{"width": "100%"}}>
        <DataTableCell uxpId="17" style={{"width": "100%"}}>Icecream</DataTableCell>
        <DataTableCell alignEnd uxpId="18" style={{"width": "100%"}}>10</DataTableCell>
        <DataTableCell alignEnd uxpId="19" style={{"width": "100%"}}>$2.35</DataTableCell>
      </DataTableRow>
    </DataTableBody>
  </DataTableContent>
</DataTable>
);
