import React from 'react';
import ChildComponent from './ChildComponent';
import ChildComponent2 from './ChildComponent2';

function ParentComponent() {
  const message = "Hello from Parent Component";

  return (
    <div className="ParentComponent">
      <h1>Parent Component</h1>
      {/* Passing 'message' as a prop to ChildComponent */}
      <ChildComponent greeting={message} />
      <ChildComponent2 greeting={message} />
    </div>
  );
}

export default ParentComponent;
