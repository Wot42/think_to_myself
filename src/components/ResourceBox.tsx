import React from "react";
import { Resource } from "../utils/typesAndInterfaces";
import "./css/ResourceBox.css";

interface props {
  resource: Resource;
  id: string;
}

const ResourceBox = ({ resource, id }: props) => {
  // must be in a div with "container-type: size" to work
  return (
    <div className="container app__default-cursor">
      <div className={`color__${resource} resource-box ${id}`}>
        {resource.toUpperCase()}
      </div>
    </div>
  );
};

export default ResourceBox;
