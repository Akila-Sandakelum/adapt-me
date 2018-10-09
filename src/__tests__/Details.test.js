import React from "react";
import { create } from "react-test-renderer";
import Details from "../Details";

// snaphot test for Details markup
test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

// Component test for testing Modal showing up
test("shows modal when toggle modal is called", () => {
  const c = create(<Details />);
  const instance = c.getInstance();
  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});
