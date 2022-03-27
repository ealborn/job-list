import React, {useState} from "react";
import '../App.css';

const JobList = ({items}) => {

    const [showMe, setShowMe] = useState(true);
    const [buttonName, setButtonName] = useState("View more");
    const toggle = () => {
        setShowMe(!showMe);
        setButtonName(!buttonName)
    }
  
    return (
        <div className="jobList">
            <h1>Job-list</h1>

            {items.map(job => (
                <div key={job.id} className="ad-wrapper">
                    <div className="ad-top">
                            <img src={job.company.logo} alt="company logo"/>
                            <div className="ad-top-row">
                                <h2>{job.function} at {job.company.name}</h2>
                                <div className="ad-second-row">
                                <p>Employment type: {job.employment_type}</p>
                                <p>Published: {job.from_date}</p>
                                </div>
                            </div> 
                    </div> 

                    <div className="ad-content">
                        <div style={{ display: showMe ? "none" : "block"}}>
                            <div dangerouslySetInnerHTML={{__html: job.descr}} />
                            <div dangerouslySetInnerHTML={{__html: job.company.descr}} />
                            <div className="button-wrap">
                                <a href={job.urls.ad} target="_blank" rel="noreferrer" className="viewLink">View external ad</a>
                                <a href={job.urls.apply} target="_blank" rel="noreferrer" className="viewLink">Apply</a>
                            </div>
                        </div>
                        <button className="showMore" onClick={toggle}>{buttonName ? "View More" : "View less"}</button>
                    </div>
                </div>
            ))}
        </div>
    );
  }

  export default JobList;