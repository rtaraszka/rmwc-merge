import React from "react";
import PropTypes from "prop-types";
import { Typography as TypographyM } from '@rmwc/typography';
import '@material/typography/dist/mdc.typography.css';

function Typography(props) {
  return (
      <TypographyM {...props}>
        {props.children}
      </TypographyM>
  );
}

Typography.propTypes = {
    children: PropTypes.string,
    use: PropTypes.oneOf(['headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'headline6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline']),
    tag: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.object
};

export { Typography as default };
