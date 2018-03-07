import React from 'react'
import PropTypes from 'prop-types'

// Demo component receives property `username`
// basic arrow function with JSX to describe the view
const DemoComponent = ({username}) => (
    <div>
        <h1>Welcome to React and JSX</h1>
        <p>This is a demo of a dumb component. Welcome {username} to a new world!</p>
    </div>
);

// set list of properties and whether they're required and their datatype
// optional step, but very useful - will both data-type and cause IDEs to check you have required props
// AND help document to other devs what values they need to give to a component to get it to work
DemoComponent.propTypes = {
    username: PropTypes.string.isRequired
};

// Export component - can be done inline, but prefer it at he end - more OOP
export default DemoComponent;