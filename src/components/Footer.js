import React from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="text-center mt-5 mb-3" id="footer">
                <p className="m-0"><FaEnvelope size={15} />  chungyatyisunny@gmail.com</p>
                <p className="m-0"><FaPhone size={15} />  &#40;647&#41;390-0514</p>
                <p className="mt-2">&#169; 2022 Sunny Chung - React Portfolio </p>
            </div>
        </>
    )
}
