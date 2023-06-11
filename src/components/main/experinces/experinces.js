import React from 'react'
import SectionHeader from "../section-header/section-header"
import Experince from './experince'
import experinces from "./experiences.json"
const Experinces = () => {
	return (
		<section id="experience" class="resume">
			<SectionHeader title="Experiences" isButtonVisible={false}/>


			<div className="row">

				{experinces.map((exp, i) => (<div class="col-md-12 col-sm-12 col-xs-12">
					<Experince {...exp} />
				</div>
				))}


			</div>

		</section>
	)
}

export default Experinces