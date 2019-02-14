import React from "react";
import PropTypes from "prop-types";
import { ListGroup as ListGroupM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListGroup(props) {
  return (
      <ListGroupM {...props}>
        {props.children}
      </ListGroupM>
  );
}

ListGroup.propTypes = {
    children: PropTypes.node,
};

export { ListGroup as default };
