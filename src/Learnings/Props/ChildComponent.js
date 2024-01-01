import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Accessing the 'greeting' prop passed from the parent */}
      <p>{props.greeting}</p>
    </div>
  );
}

export default ChildComponent;
