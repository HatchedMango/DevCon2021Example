import React from "react";
import renderer, { act } from "react-test-renderer";
import UserView from "../components/UserView";
import { ServicesProvider } from "../contexts/ServicesContext";
import { UserIdContext } from "../contexts/UserIdContext";

jest.mock('../components/ChildComponent');
jest.useFakeTimers();

const createUserView = (userId, services) => {
  return renderer.create(
    <ServicesProvider services={services}>
      <UserIdContext.Provider value={[userId, jest.fn()]}>
        <UserView />
      </UserIdContext.Provider>
    </ServicesProvider>
  );
};

describe("<UserView />", () => {
  let component;
  let userView;

  const userId = 1212;
  const user = {
    nickName: "Dan",
    displayName: "Daniel Longfellow"
  };
  let services;

  beforeEach(() => {
    services = {
      userService: {
        getUser: () => {
          return new Promise(() => {});
        }
      }
    };

    act(() => {
      component = createUserView(userId, services);
    });

    userView = component.root;
  });

  it('Renders with "Loading..." while user is being fetched', () => {
    const loadingDisplay = userView.findByProps({
      id: "loading-display"
    });

    expect(loadingDisplay.props.children).toBe("Loading...");
  });

  it("Renders with user display after user is fetched", () => {
    services.userService = {
      getUser: () => {
        return {
          then: func => {
            func(user);
          }
        };
      }
    }

    act(() => {
      component = createUserView(userId, services);
    });

    userView = component.root;

    const userDisplayName = userView.findByProps({
      id: "user-display-name"
    });
    const userNickName = userView.findByProps({
      id: "user-nick-name"
    });

    expect(userDisplayName.props.children).toEqual([
      "Display Name: ",
      user.displayName
    ]);
    expect(userNickName.props.children).toEqual(["Nick Name: ", user.nickName]);
  });

  it('Renders without "Hello, World!" message by default', () => {
    const messages = userView.findAllByProps({
      id: "message"
    });

    expect(messages).toHaveLength(0);
  });

  it('Renders with "Hello, World!" message after childComponent calls the setDisplayMessage callback', () => {
    const childComponent = userView.findByProps({
      mockId: "child-component-mock"
    });

    act(() => {
      childComponent.props.setDisplayMessage();
    });

    const message = userView.findByProps({
      id: "message"
    });

    expect(message.props.children).toBe("Hello, World!");
  });
});
