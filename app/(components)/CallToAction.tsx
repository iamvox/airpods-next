import React from "react";

type CallToActionProps = {
  className: string;
  CallToAction: string;
};

const CallToAction = ({ className, CallToAction }: CallToActionProps) => {
  return (
    <span className="cursor-pointer">
      <span className={`${className} hover:underline`}>{CallToAction}</span>
      <span className={`${className}`}>{" \u203A"}</span>
    </span>
  );
};

export default CallToAction;
