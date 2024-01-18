/** @format */

import React from "react";

function BtnComponent({ btnStyle }) {
  return (
    <div>
      <a
        href='#'
        id='more-btn'
        class={btnStyle}>
        <i class='fa-solid fa-arrow-right'></i> Read more
      </a>
    </div>
  );
}

export default BtnComponent;
