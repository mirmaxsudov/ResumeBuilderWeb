import React from "react";
import TiptapEditor from "./Editor";
import EnjiResume from "./EnjiResume";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TiptapEditor />
      <div className="enji-wrapper">
        <EnjiResume />
      </div>
    </div>
  );
};

export default App;
