import React, {useState} from 'react'

/**
 * I used this expandable text field  to display the description of each property when te descrption is longer than
 * 10 characters. It has a button to display more or less text.
 */
interface Props {
    children: string;
    maxChars?: number;
}
function ExpandableTextField({children, maxChars = 10} : Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExpanded? children : children.substring(0, maxChars);
    return <>
        <p>{text}...</p>
        <button className='btn btn-dark' onClick={() => setIsExpanded(!isExpanded)}>
            { isExpanded ? 'Less Text' : 'More Text' }
        </button>
    </>;
};
export default ExpandableTextField
