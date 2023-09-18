import React from "react";
import { CustomSVGProps } from "@/lib/types";

const MenuIcon: React.FC<CustomSVGProps> = ({
  width,
  height,
  color,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26 10C26 10.2947 25.8859 10.5773 25.6827 10.7857C25.4795 10.994 25.204 11.1111 24.9167 11.1111H1.08333C0.796016 11.1111 0.520466 10.994 0.317301 10.7857C0.114137 10.5773 0 10.2947 0 10C0 9.70532 0.114137 9.4227 0.317301 9.21433C0.520466 9.00595 0.796016 8.88889 1.08333 8.88889H24.9167C25.204 8.88889 25.4795 9.00595 25.6827 9.21433C25.8859 9.4227 26 9.70532 26 10ZM1.08333 2.22222H24.9167C25.204 2.22222 25.4795 2.10516 25.6827 1.89679C25.8859 1.68841 26 1.4058 26 1.11111C26 0.816426 25.8859 0.533811 25.6827 0.325437C25.4795 0.117063 25.204 0 24.9167 0H1.08333C0.796016 0 0.520466 0.117063 0.317301 0.325437C0.114137 0.533811 0 0.816426 0 1.11111C0 1.4058 0.114137 1.68841 0.317301 1.89679C0.520466 2.10516 0.796016 2.22222 1.08333 2.22222ZM24.9167 17.7778H1.08333C0.796016 17.7778 0.520466 17.8948 0.317301 18.1032C0.114137 18.3116 0 18.5942 0 18.8889C0 19.1836 0.114137 19.4662 0.317301 19.6746C0.520466 19.8829 0.796016 20 1.08333 20H24.9167C25.204 20 25.4795 19.8829 25.6827 19.6746C25.8859 19.4662 26 19.1836 26 18.8889C26 18.5942 25.8859 18.3116 25.6827 18.1032C25.4795 17.8948 25.204 17.7778 24.9167 17.7778Z"
        fill={color}
      />
    </svg>
  );
};

export default MenuIcon;
