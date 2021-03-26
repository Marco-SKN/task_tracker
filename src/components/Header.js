//no need to import anymore, used to be required for every react component
//import React from 'react'

//use impt import proptype
import PropTypes from "prop-types";
import Button from "./Button";

//use rafce [enter] to create boilerplate below
const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

// CSS in JS, style= {headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'Black'
// }

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
