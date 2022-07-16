import { useState, useEffect, useRef } from "react";

const useHandleIntersection = ( headerIds, activeId, setActiveId ) => {
    // const [activeId, setActiveId] = useState('');
    const observer = useRef();
    const callback = (entries) => {
        entries.forEach( entry => {
            console.log(entry.target.id)
            if (entry?.isIntersecting) {
                setActiveId(entry.target.id)
            }
        });
    }

    useEffect( () => {
        const headingElems = headerIds.map( id => document.getElementById(id))
        console.log('headingElems =', headingElems)
        observer.current?.disconnect();
        
        observer.current = new IntersectionObserver( 
                callback, 
                { rootMargin: "0% 0% -98% 0%" }
            )
        
        headingElems.forEach( el => {
            if (el) {
                observer.current?.observe(el)
            }
        });

        return () => observer.current?.disconnect();
    }, [headerIds])

    return activeId;
}

const TableOfContents = () => {
    /*
    Pseudocode:
    1. Find all h2's
    2. List all h2's in TOC
    3. Dynamically add id's to all h2's if they dont already exist
        - for each heading, create an object with title, id
    4. Link TOC to h2's
    */
   
   const [headings, setHeadings] = useState([]);
   const [activeId, setActiveId] = useState('');

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

   useHandleIntersection(headings.map(({slug}) => slug), activeId, setActiveId);
    
    return <ul style={{ padding: '0', listStyleType: 'none' }}>
            {headings.map( (heading, index) => {
                return <li key={index} className='toc-link'>
                            <a 
                                href={`#${heading.slug}`}
                                style={{ fontWeight: activeId === heading.slug ? "bold" : "normal" }}
                                onClick = { () => setActiveId(heading.slug) }
                            >
                                {heading.title}
                            </a>
                        </li>
            })}
        </ul>
}

export default TableOfContents;