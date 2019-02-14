import React from "react";
import PropTypes from "prop-types";
import { LinearProgress as LinearProgressM } from '@rmwc/linear-progress';
import '@material/linear-progress/dist/mdc.linear-progress.css';

function LinearProgress(props) {
  return (
      <LinearProgressM {...props} onChange={props.onChange} />
  );
}

LinearProgress.propTypes = {
    progress: PropTypes.number,
    buffer: PropTypes.number,
    determinate: PropTypes.bool,
    reversed: PropTypes.bool,
    closed: PropTypes.bool,
};

export { LinearProgress as default };
