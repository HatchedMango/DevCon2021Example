/* eslint-disable react/prop-types */
import React from "react";

const ChildComponentMock = ({ children, ...props }) => {
  return (
    <div mockId="child-component-mock" {...props}>
      {children}
    </div>
  );
};

export default ChildComponentMock;
