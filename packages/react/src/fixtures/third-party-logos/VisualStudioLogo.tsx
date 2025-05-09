import React from 'react'

type VisualStudioLogoProps = React.SVGProps<SVGSVGElement>

export const VisualStudioLogo = (props: VisualStudioLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 95.51"
    focusable="false"
    aria-label="Visual Studio icon"
    {...props}
  >
    <defs>
      <mask id="visualStudioMask" x="0" y="0" width="96" height="95.51" maskUnits="userSpaceOnUse">
        <g transform="translate(0 -0.25)">
          <path
            d="M68.89,95.6a6,6,0,0,0,3.93-.44L92.6,85.65A6,6,0,0,0,96,80.24V15.76a6,6,0,0,0-3.4-5.41L72.82.84A6,6,0,0,0,68.34.55,6,6,0,0,0,66,2L34.12,37.26,15.5,22l-1.63-1.4a4,4,0,0,0-3.61-.83,2.55,2.55,0,0,0-.53.18L2.46,23A4,4,0,0,0,0,26.37c0,.1,0,.2,0,.3V69.33c0,.1,0,.2,0,.3A4,4,0,0,0,2.46,73l7.27,3a2.55,2.55,0,0,0,.53.18,4,4,0,0,0,3.61-.83L15.5,74,34.12,58.74,66,94A6,6,0,0,0,68.89,95.6ZM72,27.68,47.21,48,72,68.32ZM12,34.27,24.41,48,12,61.73Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </g>
      </mask>
      <linearGradient
        id="visualStudioGradient"
        x1="48"
        y1="97.75"
        x2="48"
        y2="2.25"
        gradientTransform="matrix(1, 0, 0, -1, 0, 98)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <title>Visual Studio</title>
    <g mask="url(#visualStudioMask)">
      <path
        d="M13.87,75.4a4,4,0,0,1-4.14.65L2.46,73A4,4,0,0,1,0,69.33V26.67A4,4,0,0,1,2.46,23l7.27-3a4,4,0,0,1,4.14.65L15.5,22A2.21,2.21,0,0,0,12,23.8V72.2A2.21,2.21,0,0,0,15.5,74Z"
        transform="translate(0 -0.25)"
        fill="#52218a"
      />
      <path
        d="M2.46,73A4,4,0,0,1,0,69.33V69a2.31,2.31,0,0,0,4,1.55L66,2A6,6,0,0,1,72.82.84L92.6,10.36A6,6,0,0,1,96,15.77V16a3.79,3.79,0,0,0-6.19-2.93L15.5,74l-1.63,1.4a4,4,0,0,1-4.14.65Z"
        transform="translate(0 -0.25)"
        fill="#6c33af"
      />
      <path
        d="M2.46,23A4,4,0,0,0,0,26.67V27a2.31,2.31,0,0,1,4-1.55L66,94a6,6,0,0,0,6.82,1.16L92.6,85.64A6,6,0,0,0,96,80.23V80a3.79,3.79,0,0,1-6.19,2.93L15.5,22l-1.63-1.4A4,4,0,0,0,9.73,20Z"
        transform="translate(0 -0.25)"
        fill="#854cc7"
      />
      <path
        d="M72.82,95.16A6,6,0,0,1,66,94a3.52,3.52,0,0,0,6-2.49v-87A3.52,3.52,0,0,0,66,2,6,6,0,0,1,72.82.84L92.6,10.35A6,6,0,0,1,96,15.76V80.24a6,6,0,0,1-3.4,5.41Z"
        transform="translate(0 -0.25)"
        fill="#b179f1"
      />
      <g style={{opacity: 0.25}}>
        <path
          d="M68.89,95.6a6,6,0,0,0,3.93-.44L92.6,85.65A6,6,0,0,0,96,80.24V15.76a6,6,0,0,0-3.4-5.41L72.82.84A6,6,0,0,0,68.34.55,6,6,0,0,0,66,2L34.12,37.26,15.5,22l-1.63-1.4a4,4,0,0,0-3.61-.83,2.55,2.55,0,0,0-.53.18L2.46,23A4,4,0,0,0,0,26.37c0,.1,0,.2,0,.3V69.33c0,.1,0,.2,0,.3A4,4,0,0,0,2.46,73l7.27,3a2.55,2.55,0,0,0,.53.18,4,4,0,0,0,3.61-.83L15.5,74,34.12,58.74,66,94A6,6,0,0,0,68.89,95.6ZM72,27.68,47.21,48,72,68.32ZM12,34.27,24.41,48,12,61.73Z"
          transform="translate(0 -0.25)"
          fill="url(#visualStudioGradient)"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
)
