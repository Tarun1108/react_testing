

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Doller from "./doller";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    firstName:"$ Rhiannon" ,
    
    City: "LA",
    birthDate: "$ 10-4-1974"

  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

 
  await act(async () => {
    render(<Doller id="125" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.firstName);
  
  expect(container.querySelector("strong").textContent).toBe(fakeUser.City);
  expect(container.textContent).toContain(fakeUser.birthDate);

 
  global.fetch.mockRestore();
});
