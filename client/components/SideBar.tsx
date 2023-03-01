import React from "react";
import NewChat from "./NewChat";

const NavBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* new chat */}
          <NewChat />
          <div>{/* module selection */}</div>

          {/* map through the chart */}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
