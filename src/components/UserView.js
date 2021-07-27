import React, { useState, useContext, useEffect } from "react";
import { ServicesContext } from "../contexts/ServicesContext";
import { UserIdContext } from "../contexts/UserIdContext";
import ChildComponent from "./ChildComponent";
import "./UserView.css";

function UserView() {
  const { userService } = useContext(ServicesContext);
  const [userId] = useContext(UserIdContext);
  const [user, setUser] = useState(null);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (userId !== null) {
      userService.getUser(userId).then((results) => {
        setUser(results);
      });
    }
  }, [userId, userService]);

  return (
    <div id="user-view">
      {user === null && <div id="loading-display">Loading...</div>}
      {user !== null && (
        <div>
          <div id="user-display-name">Display Name: {user.displayName}</div>
          <div id="user-nick-name">Nick Name: {user.nickName}</div>
        </div>
      )}
      <ChildComponent
        setDisplayMessage={() => setDisplayMessage(!displayMessage)}
      />
      {displayMessage && <div id="message">Hello, World!</div>}
    </div>
  );
}

export default UserView;
