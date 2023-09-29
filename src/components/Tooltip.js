import React from "react";

function Tooltip({ value, style }) {
  return <div className="tooltip-css" style = {style}>{value}</div>
}

export default Tooltip;