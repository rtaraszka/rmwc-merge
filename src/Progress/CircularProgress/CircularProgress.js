import React from "react";
import PropTypes from "prop-types";
import { CircularProgress as CircularProgressM } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/circular-progress.css';

function CircularProgress(props) {
  return (
      <CircularProgressM {...props} onChange={props.onChange} />
  );
}

CircularProgress.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    progress: PropTypes.number,
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
    className: PropTypes.string,
    style: PropTypes.object
};

export { CircularProgress as default };
