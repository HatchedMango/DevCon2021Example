import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const ServicesContext = React.createContext([{}, () => {}]);

const ServicesProvider = ({ children, services }) => {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

ServicesProvider.propTypes = propTypes;

export { ServicesContext, ServicesProvider };
