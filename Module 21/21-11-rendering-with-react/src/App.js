import React from "react";
import ActivityList from "./ActivityList";
import Header from "./Header"
import HobbyList from "./HobbyList"
const dailyActivities = [
  { time: "8:00 am", description: "wake up" },
  { time: "8:30 am", description: "breakfast" },
  { time: "9:00 am", description: "morning nap" },
  { time: "12:00 pm", description: "lunch" },
  { time: "1:00 pm", description: "afternoon nap" },
  { time: "6:00 pm", description: "dinner" },
  { time: "7:00 pm", description: "play" },
  { time: "10:00 pm", description: "bedtime" },
];
const hobbies = ["watching birds", "hiding in a box", "napping"];

function App() {
  
  return (
    <div>
    <Header />;
      <HobbyList hobbies={hobbies}/>
      <ActivityList dailyActivities={dailyActivities}/>
      </div>
  )
}

export default App;
