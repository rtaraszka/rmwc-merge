import React from "react";
import PropTypes from "prop-types";
import { List as ListM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function List(props) {
  return (
      <ListM {...props}>
        {props.children}
      </ListM>
  );
}

List.propTypes = {
    children: PropTypes.node,
    dense: PropTypes.bool,
    twoLine: PropTypes.bool,
    avatarList: PropTypes.bool,
    nonInteractive: PropTypes.bool
};

export { List as default };
