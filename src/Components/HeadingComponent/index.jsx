/** @format */

import React from "react";

function HeadingComponent({ headingStyle, headingText, headingSpan }) {
  return (
    <div>
      <h1 className={headingStyle}>
        {headingText} <span className='d-block'>{headingSpan}</span>
      </h1>
    </div>
  );
}

export default HeadingComponent;
