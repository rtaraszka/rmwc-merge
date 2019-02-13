import * as React from "react";
import ImageList from "../ImageList";
import ImageListItem from "../../ImageListItem";
import ImageListSupporting from "../../ImageListSupporting";
import ImageListLabel from "../../ImageListLabel";
import ImageListImage from "../../ImageListImage";

export default (
  <ImageList
    uxpId="1739700042"
    masonry
    withTextProtection
    style={{
      columnCount: 3,
      columnGap: "12px"
    }}
  >
    <ImageListItem key="1" uxpId="1" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src="https://material-components-web.appspot.com/images/photos/3x2/1.jpg"
        uxpId="1.1"
      />
      <ImageListSupporting uxpId="1.2">
        <ImageListLabel uxpId="1.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="2" uxpId="2" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src="https://material-components-web.appspot.com/images/photos/2x3/1.jpg"
        uxpId="2.1"
      />
      <ImageListSupporting uxpId="2.2">
        <ImageListLabel uxpId="2.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="3" uxpId="3" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src="https://material-components-web.appspot.com/images/photos/3x2/4.jpg"
        uxpId="3.1"
      />
      <ImageListSupporting uxpId="3.2">
        <ImageListLabel uxpId="3.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="4" uxpId="4" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src="https://material-components-web.appspot.com/images/photos/3x2/5.jpg"
        uxpId="4.1"
      />
      <ImageListSupporting uxpId="4.2">
        <ImageListLabel uxpId="4.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="5" uxpId="5" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src='https://material-components-web.appspot.com/images/photos/2x3/5.jpg'
        uxpId="5.1"
      />
      <ImageListSupporting uxpId="5.2">
        <ImageListLabel uxpId="5.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="6" uxpId="6" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src='https://material-components-web.appspot.com/images/photos/3x2/6.jpg'
        uxpId="6.1"
      />
      <ImageListSupporting uxpId="6.2">
        <ImageListLabel uxpId="6.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="7" uxpId="7" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src='https://material-components-web.appspot.com/images/photos/2x3/2.jpg'
        uxpId="7.1"
      />
      <ImageListSupporting uxpId="7.2">
        <ImageListLabel uxpId="7.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>

    <ImageListItem key="8" uxpId="8" style={{ marginBottom: "16px" }}>
      <ImageListImage
        src='https://material-components-web.appspot.com/images/photos/3x2/8.jpg'
        uxpId="8.1"
      />
      <ImageListSupporting uxpId="8.2">
        <ImageListLabel uxpId="8.3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>
  </ImageList>
);
