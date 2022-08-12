import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Project() {
    //initalize the component and uses setState to update the component state
    const [projects, setProjects] = useState([]);

    //perform side effects in components
    useEffect(() => {
        axios.get('./json/projectData.json')
            .then(res => {
                console.log(res.data);
                //pass in json data from projectData.json into setProjects
                setProjects(res.data);
            })
            .catch(err => {
                console.log("Something went wrong: project data is not fetch.");
            })
    }, [])

    return (
        <>
            <div className="container">
                <h2 className=" section-heading my-3">My Projects</h2>

                {
                    projects.map(p => (
                        <div key={p.id} className="row ">
                            <div className="col-12 col-md-6 py-md-2"><img src={p.image} className="project-img" alt={p.title} /></div>
                            <div className="col-12 col-md-6 py-2">
                                <h3 className="h4">{p.title}</h3>
                                <p >{p.content}</p>
                                <a href={p.url} className="btn btn-primary project-btn" >View Project</a>
                            </div>

                        </div>
                    ))
                }

            </div>
        </ >
    )
}

