import React from 'react'

const Experince = ({company,title,date,desc}) => {
    return (
        <div class="top-item resume-item">
            <h2>{company}</h2>
            <span>{title}|{date}</span>
            <p>{desc}</p>
        </div>
    )
}

export default Experince