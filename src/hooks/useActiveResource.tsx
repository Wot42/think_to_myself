import { useState } from "react";
import { Resource } from "../utils/typesAndInterfaces";
import { TableauRules } from "../utils";

const useActiveResource = (
  tableau: TableauRules,
  setTableau: React.Dispatch<React.SetStateAction<TableauRules>>
) => {
  const [activeResource, setActiveResource] = useState<Resource[]>([]);

  const makeActive = (resource: Resource, amount = 1) => {
    var makeActive = [...activeResource];
    for (let i = 0; i < amount; i++) {
      makeActive.splice(0, 0, resource);
    }
    setActiveResource(makeActive);
    if (amount > 4) {
      var tab = tableau;
      if (resource === "b" || resource === "e") {
        tab.cards.x++;
      } else {
        tab.cards.y++;
      }
      setTableau(tab);
    }
  };

  const takeActive = () => {
    var takeActive = [...activeResource];
    const resource = activeResource[0];

    takeActive.splice(0, 1);

    setActiveResource(takeActive);
    return resource;
  };

  return {
    activeResource,
    makeActive,
    takeActive,
  };
};

export default useActiveResource;
