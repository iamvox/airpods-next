import React from "react";

type CallToActionProps = {
  className: string;
  callToAction: string;
};

const CallToAction = ({ className, callToAction }: CallToActionProps) => {
  return (
    <span className="cursor-pointer whitespace-nowrap">
      <span className={`${className} hover:underline`}>
        {callToAction}
        <span className={`${className} `}>{" \u203A"}</span>
      </span>
    </span>
  );
};

export default CallToAction;
