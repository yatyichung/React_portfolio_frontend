import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Skill() {
    //initalize the component and uses setState to update the component state
    const [skills, setSkills] = useState([]);

    //perform side effects in components
    useEffect(() => {
        axios.get('./json/skillData.json')
            .then(res => {
                console.log(res.data);
                //pass in json data from skillData.json into setSkills
                setSkills(res.data);
            })
            .catch(err => {
                console.log("Something went wrong: skill data is not fetch.");
            })
    }, [])

    return (
        <>
            <div className="container">
                <h2 className=" my-3 section-heading">My Skills</h2>
                <div className="row skill-row">
                    {
                        skills.map(s => (
                            <span key={s.id}>
                                <span className="list-skills">{s.skill} <sup className="px-2 border-round" >{s.level}</sup></span>
                            </span>
                        ))
                    }
                </div>
            </div>
        </ >
    )
}


