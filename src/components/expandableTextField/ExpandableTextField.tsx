import React, {useState} from 'react'

interface Props {
    children: string;
    maxChars?: number;
}
function ExpandableTextField({children, maxChars = 50} : Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExpanded? children : children.substring(0, maxChars);
    return <><p>{text}...</p><button className='btn btn-dark' onClick={() => setIsExpanded(!isExpanded)}>{ isExpanded ? 'Less Text' : 'More Text' }</button></>;

};
export default ExpandableTextField
