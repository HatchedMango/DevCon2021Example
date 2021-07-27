import React from "react";
import renderer, { act } from "react-test-renderer";
import ChildComponent from "../components/ChildComponent";

describe("<ChildComponent />", () => {
  let childComponent;

  const setDisplayMessage = jest.fn();

  beforeEach(() => {
    let component;

    act(() => {
      component = renderer.create(
        <ChildComponent setDisplayMessage={setDisplayMessage} />
      );
    });

    childComponent = component.root;
  });

  it('Calls setDisplayMessage when the "Toggle Message" button is clicked', () => {
    const button = childComponent.findByProps({
      id: "toggle-message-button"
    });

    act(() => {
      button.props.onClick();
    });

    expect(setDisplayMessage).toHaveBeenCalled();
  });
});
