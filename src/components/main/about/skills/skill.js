import React from 'react'

const Skill = ({name,value}) => {
    return (
        <>
            <div class="skill-info clearfix">
                <h3 class="pull-left">{name}</h3>
                <span class="pull-right">{value}%</span>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar"
                    aria-valuenow={value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </>
    )
}

export default Skill