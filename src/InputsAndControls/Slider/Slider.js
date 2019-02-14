import React from "react";
import PropTypes from "prop-types";
import { Slider as SliderM } from '@rmwc/slider';
import '@material/slider/dist/mdc.slider.css';

function Slider(props) {
  return (
      <SliderM {...props} onChange={props.onChange} />
  );
}

Slider.propTypes = {
    onChange: PropTypes.func,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.bool,
    label: PropTypes.string
};

export { Slider as default };
