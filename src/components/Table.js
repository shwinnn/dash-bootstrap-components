import React from 'react';
import PropTypes from 'prop-types';
import {Table as RSTable} from 'reactstrap';

const Table = props => {
  const {children, ...otherProps} = props;
  return <RSTable {...otherProps}>{children}</RSTable>;
};

Table.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: PropTypes.string,

  /**
   * HTML tag to use for the table, default: table
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * Specify table size, options: 'sm', 'md', 'lg'
   */
  size: PropTypes.string,

  /**
   * Apply the `table-bordered` class which adds borders on all sides of the
   * table and cells.
   */
  bordered: PropTypes.bool,

  /**
   * Apply the `table-borderless` class which removes all borders from the
   * table and cells.
   */
  borderless: PropTypes.bool,

  /**
   * Apply the `table-striped` class which applies 'zebra striping' to rows in
   * the table body.
   */
  striped: PropTypes.bool,

  /**
   * Apply the `table-dark` class for dark cell backgrounds and light text.
   */
  dark: PropTypes.bool,

  /**
   * Apply the `table-hover` class which enables a hover state on table rows
   * within the table body.
   */
  hover: PropTypes.bool,

  /**
   * Set to True or one of the breakpoints 'sm', 'md', 'lg', 'xl' to make table
   * scroll horizontally at lower breakpoints.
   */
  responsive: PropTypes.oneOf([PropTypes.bool, PropTypes.string])
};

export default Table;
