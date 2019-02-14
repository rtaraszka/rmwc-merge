import * as React from "react";
import SimpleDataTable from "../SimpleDataTable";

export default (
<SimpleDataTable
  uxpId="0"
  headers={[['Item', 'Quantity', 'Value']]}
  data={
    [
      ['Cookies', 25, '$12.40'],
      ['Pizza', 11, '$10.43'],
      ['Icecream', 3, '1.43'],
      ['Candy', 72, '$22.45'],
      ['Cakes', 101, '$215.05'],
      ['Muffins', 3, '$5.97']
    ]
  }
/>
);
