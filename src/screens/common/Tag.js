import React, { useState, useEffect } from 'react';

export const TAG_STYLE = {
    PILL: 'PILL',
    PLAIN: 'PLAIN'
};

function Tag({ text, style }) {

    const [tagClass, setTagClass] = useState([]);
    
    useEffect(() => {
        if (style === TAG_STYLE.PILL) {
            setTagClass("tag-pill");
        } else {
            setTagClass("tag-plain");
        }
    }, []);

    return (
        <div class={tagClass} >
            {text}
        </div>
    );
}

export default Tag;