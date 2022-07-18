import InterfacePill from "../models/interfacePill";

export const getNotes = ():Promise<string[]> => {
  return fetch("http://77.223.99.133:8080/api/products/part").then(data => data.json());
};

export const postNotes = (pills: InterfacePill[]) => {
  fetch("http://77.223.99.133:8080/api/products/part", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },

    body: JSON.stringify(pills)
  });

};


