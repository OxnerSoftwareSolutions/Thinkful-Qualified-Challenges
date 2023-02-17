import React from "react";
import "./ActivityList.css";
import Activity from "./Activity.js";


function ActivityList({dailyActivities}) {
  console.log(dailyActivities)
  if(dailyActivities.length !== 0) {
  const list = dailyActivities.map(({time, description}, index) => (
  <Activity key={index} time={time} description={description}/>
  ));
  return (
    <table>{list}</table>
  )}
  return null;
}
  
  
    

export default ActivityList;