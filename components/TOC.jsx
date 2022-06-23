import { useState, useEffect } from "react";

export default function TOC(props) {
    /*
    Pseudocode:
    1. Find all h2's
    2. List all h2's in TOC
    3. Dynamically add id's to all h2's if they dont already exist
    4. Link TOC to h2's
    */
   
    // Find headings
   const [headings, setHeadings] = useState([]);
   
   useEffect( () => {
       const titles = Array.from(document.querySelectorAll('h2'))
           .map( title => title.textContent)
       setHeadings(titles);
   }, [])
    

    return <div>
        <ul>
            {headings.map( (heading, index) => {
                return <li key={index}>{heading}</li>
            })}
        </ul>
    </div>;
}
