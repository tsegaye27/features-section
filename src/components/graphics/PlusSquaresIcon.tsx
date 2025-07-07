import React from "react";

export const PlusSquaresIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={className}
  >
    <rect x="7" y="3" width="3" height="3" fill="currentColor" />
    <rect x="7" y="11" width="3" height="3" fill="currentColor" />
    <rect x="3" y="7" width="3" height="3" fill="currentColor" />
    <rect x="11" y="7" width="3" height="3" fill="currentColor" />
  </svg>
);
