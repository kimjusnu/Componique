import React from "react";

//아이콘 SVG를 Font로 변환
export type IconName =
  | "icon-check"
  | "icon-docs"
  | "icon-login"
  | "icon-logout"
  | "icon-qr"
  | "icon-reload"
  | "icon-star"
  | "icon-undo"
  | "icon-bell"
  | "icon-bell-off"
  | "icon-bell-ring"
  | "icon-call"
  | "icon-camera"
  | "icon-code"
  | "icon-download"
  | "icon-error"
  | "icon-heart"
  | "icon-help"
  | "icon-home"
  | "icon-image"
  | "icon-info"
  | "icon-mail"
  | "icon-map"
  | "icon-menu"
  | "icon-pin"
  | "icon-refresh"
  | "icon-setting"
  | "icon-share"
  | "icon-user"
  | "icon-video"
  | "icon-web";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color = "currentColor",
}) => <i className={name} style={{ fontSize: size, color }}></i>;

export default Icon;
