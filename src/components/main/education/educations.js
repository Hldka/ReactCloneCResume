import React from 'react'
import education from "../education/educations.json"
import SectionHeader from '../section-header/section-header'
import Education from './education'
const Educations = () => {
  return (
    <section id="education" class="resume">
        <SectionHeader title="Educations" isButtonVisible={false}/>
        <div className="row">
{education.map((edu,i)=>(<div class="col-md-12 col-sm-12 col-xs-12">
					
								<Education {...edu}/>
						</div>
                        ))}
        </div>
        
         </section>
  )
}

export default Educations