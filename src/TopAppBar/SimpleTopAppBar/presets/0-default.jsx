import * as React from "react";
import SimpleTopAppBar from "../SimpleTopAppBar";

export default (
<SimpleTopAppBar
  uxpId="0"
  title="test"
  actionItems={[
    { onClick: () => console.log('Do Something'), use: 'file_download' },
    { onClick: () => console.log('Do Something'), use: 'print' },
    { onClick: () => console.log('Do Something'), use: 'bookmark' }
  ]}
/>
);
