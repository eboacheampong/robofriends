
import React from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchPane from "./SearchPane";

const App = () =>{
 return(
   <div className="tc  ">
      <h1>ROBOFRIENDS</h1>
     <SearchPane/>
     <Cardlist robots = {robots}/>
   </div>
  
);  
}


export default App;
 