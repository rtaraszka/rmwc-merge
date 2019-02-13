import * as React from "react";
import CardMedia from "../CardMedia";
import CardMediaContent from "../../CardMediaContent";
import Typography from "../../../Typography";

export default (
  <CardMedia uxpId="0">
    <CardMediaContent uxpId="1">
      <Typography
        uxpId="2"
        use="subheading2"
        tag="div"
        theme="text-primary-on-dark"
        style={{
          padding: "0.5rem 1rem",
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
          bottom: "0",
          left: "0",
          right: "0",
          position: "absolute"
        }}
      >
        Vacation Photos
      </Typography>
    </CardMediaContent>
  </CardMedia>
);
