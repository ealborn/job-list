import React from "react";
import useFetch from "./useFetch";
import JobList from "./Components/JobList";
import './App.css';

const url = "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json";

const App = () => {
   
  const { items, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <div> Loading...</div>
  } 
  if (error){
    return <div>{error}</div> 
  }
  return (
      <div> 
        <JobList items={items} />
      </div>
    );
}
export default App;