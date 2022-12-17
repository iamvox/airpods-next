import React from "react";
import { BreadCrumbsData } from "app/(constants)";
import DirectoryColumn from "app/(components)/DirectoryColumn";
import { v4 as uuid } from "uuid";

const Directory = () => {
  return (
    <nav className="flex  max-w-[980px] flex-col  md:mx-auto md:w-full md:flex-row md:justify-between ">
      {BreadCrumbsData.map((column) => (
        <DirectoryColumn column={column} key={uuid()} />
      ))}
    </nav>
  );
};

export default Directory;
