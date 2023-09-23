import { CustomSVGProps } from "@/lib/types";
import React from "react";

export default function DualChat({ width, height, className }: CustomSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 6H20V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0.000587141 18.1881 0.054234 18.3723 0.154778 18.5313C0.255321 18.6903 0.398683 18.8177 0.568392 18.8989C0.738102 18.9801 0.927276 19.0118 1.11418 18.9903C1.30108 18.9689 1.47814 18.8951 1.625 18.7775L6 15.25V19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H19.6987L24.375 24.7775C24.5519 24.9206 24.7724 24.9991 25 25C25.2652 25 25.5196 24.8946 25.7071 24.7071C25.8946 24.5196 26 24.2652 26 24V8C26 7.46957 25.7893 6.96086 25.4142 6.58579C25.0391 6.21071 24.5304 6 24 6ZM5.31875 13.2225L2 15.9062V2H18V13H5.9475C5.71863 13 5.4967 13.0786 5.31875 13.2225ZM24 21.9062L20.6812 19.2225C20.5043 19.0794 20.2838 19.0009 20.0562 19H8V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V8H24V21.9062Z"
        fill="white"
      />
    </svg>
  );
}
