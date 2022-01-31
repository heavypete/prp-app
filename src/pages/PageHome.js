import React from "react";

const PageHome = () => {
  const { siteStatus, toggleSiteStatus } = useContext(AppContext);
  return (
    <fieldset>
      <legend className="legend">Login</legend>
    </fieldset>
  );
};
