import React from 'react';
import "./assets/css/app.css" ;
import Sidebar from "./components/SideBar";
import ContentWrapper from "./components/ContentWrapper"

function App() {
  return (
    <React.Fragment>
      <div className="app">
         <Sidebar />
        <ContentWrapper />
      </div>
        </React.Fragment>
  );
}

export default App;