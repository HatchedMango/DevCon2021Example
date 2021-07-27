import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const UserIdContext = React.createContext([{}, () => {}]);

const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(1212);

  return (
    <UserIdContext.Provider value={[userId, setUserId]}>
      {children}
    </UserIdContext.Provider>
  );
};

UserIdProvider.propTypes = propTypes;

export { UserIdContext, UserIdProvider };
