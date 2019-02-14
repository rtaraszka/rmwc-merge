import * as React from "react";
import DataTableHead from "../../DataTableHead";
import DataTableRow from "../../DataTableRow";
import DataTableHeadCell from "../../DataTableHeadCell";


export default (
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
);
