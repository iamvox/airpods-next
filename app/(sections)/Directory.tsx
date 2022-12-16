import React from "react";
import { BreadCrumbsData } from "app/(constants)";
import DirectoryColumn from "app/(components)/DirectoryColumn";
import { v4 as uuid } from "uuid";
const Directory = () => {
  return (
    <nav className="flex flex-col md:flex-row">
      {BreadCrumbsData.map((column, index) => (
        <DirectoryColumn
          title={column.title}
          subtitles={column.subtitles}
          key={uuid()}
        />
      ))}
    </nav>
  );
};

export default Directory;
