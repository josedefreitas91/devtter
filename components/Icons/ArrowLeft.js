import * as React from "react"

export default function ArrowLeft(props) {
  return (
    <svg
      height={21}
      width={21}
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill={props.fill || "none"}
        fillRule="evenodd"
        stroke={props.stroke || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.499 6.497 3.5 10.499l4 4.001M16.5 10.5h-13" />
      </g>
    </svg>
  )
}
