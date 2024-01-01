import React from 'react';

function ChildComponent2(props) {
  return (
    <div>
      <h2>Child Component 2</h2>
      {/* Accessing the 'greeting' prop passed from the parent */}
      <p>{props.greeting}</p>
    </div>
  );
}

export default ChildComponent2;
