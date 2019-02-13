import * as React from "react";
import ImageListItem from "../ImageListItem";
import ImageListImage from "../../ImageListImage/ImageListImage";
import ImageListSupporting from "../../ImageListSupporting/ImageListSupporting";
import ImageListLabel from "../../ImageListLabel/ImageListLabel";

export default (
  <ImageListItem key="1" uxpId="0" style={{ marginBottom: '16px' }}>
      <ImageListImage src='https://material-components-web.appspot.com/images/photos/3x2/1.jpg' uxpId="1" />
      <ImageListSupporting uxpId="2">
        <ImageListLabel uxpId="3">Text label</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>
);
