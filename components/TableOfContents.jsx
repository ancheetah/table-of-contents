import { useState, useEffect } from "react";

export default function TableOfContents(props) {
    /*
    Pseudocode:
    1. Find all h2's
    2. List all h2's in TOC
    3. Dynamically add id's to all h2's if they dont already exist
        - for each heading, create an object with title, id
    4. Link TOC to h2's
    */
   
   const [headings, setHeadings] = useState([]);

   const slugify = (name) => {
    return name.toString().toLowerCase()
        .replace(/'/g, "")      // remove aprostrophes
        .replace(/\W+/g, "-")   // hyphenate words
        .replace(/^-+/, "")     // trim dashes at start and end
        .replace(/-+$/, "")
   }
   
   useEffect( () => {
    // Find headings and create slugs
    const headingInfo = Array.from(document.querySelectorAll('h2'))
        .map( elem => {
            const title = elem.textContent
            const slug = elem.id || slugify(elem.textContent);

            // Set heading id
            if (!elem.id) {
                elem.setAttribute('id', slug)
            }

            return {
                title: elem.textContent,
                slug: elem.id || slugify(elem.textContent)
            }
        })

    console.log(headingInfo);
    setHeadings(headingInfo);
   }, [])
    
   // List all headings in TOC
    return <ul style={{ padding: '0', listStyleType: 'none' }}>
            {headings.map( (heading, index) => {
                return <li key={index} className='toc-link'>
                            <a href={`#${heading.slug}`}>{heading.title}</a>
                        </li>
            })}
        </ul>
}
