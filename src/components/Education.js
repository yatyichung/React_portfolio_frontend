import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGraduationCap, FaPlay } from "react-icons/fa";

export default function Education() {
    //initalize the component and uses setState to update the component state
    const [educations, setEducations] = useState([]);

    //perform side effects in components
    useEffect(() => {
        axios.get('./json/educationData.json')
            .then(res => {
                console.log(res.data);
                //pass in json data from educationData.json into setEducations
                setEducations(res.data);
            })
            .catch(err => {
                console.log("Something went wrong: education data is not fetch.");
            })
    }, [])

    return (
        <>
            <div className="container ">
                <h2 className=" my-3 section-heading">My Education</h2>
                <div className="row">
                    {
                        educations.map(e => (
                            <div key={e.id} className="col-12 col-md-4 education-box">
                                <h3 className="h4">{e.school}</h3>
                                <p>{e.program}</p>
                                <p><FaPlay size={20} color="#AEC6CF" /> Start date: {e.start_date}</p>
                                <p><FaGraduationCap size={25} color="#AEC6CF" /> End date: {e.end_date}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}


