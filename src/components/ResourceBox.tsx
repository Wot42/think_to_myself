import React from "react";
import { Resource } from "../utils/typesAndInterfaces";
import "./ResourceBox.css";

interface props {
  resource: Resource;
}

const ResourceBox = ({ resource }: props) => {
  // must be in a div with "container-type: size" to work
  return (
    <div className="container">
      <div className={`color__${resource} resource-box`}>
        {resource.toUpperCase()}
      </div>
    </div>
  );
};

export default ResourceBox;
