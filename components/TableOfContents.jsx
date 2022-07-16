import { useState, useEffect, useRef } from 'react';

// Find headings and dynamically set IDs
const useHeadings = () => {
    const [headings, setHeadings] = useState([]);

    const slugify = (name) => {
        return name
            .toString()
            .toLowerCase()
            .replace(/'/g, '') // remove aprostrophes
            .replace(/\W+/g, '-') // hyphenate words
            .replace(/^-+/, '') // trim dashes at start and end
            .replace(/-+$/, '');
    };

    useEffect(() => {
        const headingInfo = Array.from(document.querySelectorAll(['h2','h3'])).map(
            (elem) => {
                const title = elem.textContent;
                const slug = elem.id || slugify(title);

                if (!elem.id) {
                    elem.setAttribute('id', slug);
                }

                return {
                    title: title,
                    slug: slug,
                    tag: elem.tagName.toLowerCase(),
                };
            }
        );

        console.log(headingInfo);
        setHeadings(headingInfo);
    }, []);

    return headings;
};

// Set active heading on scroll
const useHandleIntersection = (headerIds, activeId, setActiveId) => {
    const observer = useRef(); // Get current elem
    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry?.isIntersecting) {
                setActiveId(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const headingElems = headerIds.map((id) => document.getElementById(id));

        observer.current?.disconnect();
        observer.current = new IntersectionObserver(callback, {
            rootMargin: '0% 0% -98% 0%'
        });
        headingElems.forEach((el) => observer.current?.observe(el)); // Observe the headings

        return () => observer.current?.disconnect();
    }, [headerIds]);

    return activeId;
};

const TableOfContents = () => {
    const headings = useHeadings();
    const [activeId, setActiveId] = useState('');

    useHandleIntersection(
        headings.map(({ slug }) => slug),
        activeId,
        setActiveId
    );

    return (
        <ul style={{ padding: '0', listStyleType: 'none' }}>
            {headings.map((heading, index) => {
                return (
                    <li key={index} className='toc-link'>
                        <a
                            href={`#${heading.slug}`}
                            style={{
                                fontWeight:
                                    activeId === heading.slug
                                        ? 'bold'
                                        : 'normal',
                                paddingLeft: 
                                    heading.tag === 'h3'
                                        ? '1em'
                                        : '0',
                            }}
                            onClick={() => setActiveId(heading.slug)}
                        >
                            {heading.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default TableOfContents;
