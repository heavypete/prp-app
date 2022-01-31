import React from "react";

const PageHome = () => {
  const { siteStatus, toggleSiteStatus } = useContext(AppContext);

  return (
    <div>
      This is the welcome page :D
      <p>
        Current status is <span className="highlight">{siteStatus}</span>
      </p>
      <p>
        <button onClick={toggleStatus}> Toggle Status</button>
      </p>
    </div>
  );
};

export default PageHome;
