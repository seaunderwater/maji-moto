import React from 'react'
import Title from '../components/Title'
import ProjectCard from '../components/ProjectCard'
import ProjectCardGrid from '../components/ProjectCardGrid'
import './index.css'


export default () =>  (	
	<div>
	<Title></Title>

	<ProjectCardGrid>
	
	<ProjectCard
		img=""  
		title="Cyber Africa"
		description="this is my description"
	/>
	<ProjectCard
		img=""  
		title="NLP Africa"
		description="this is my description"
	/>
	<ProjectCard
		img=""  
		title="Analytics Africa"
		description="this is my description"
	/>
	<ProjectCard
		img=""  
		title="Cloud Africa"
		description="this is my description"
	/>
	<ProjectCard
		img=""  
		title="Educate Africa"
		description="this is my description"
	/>
	<ProjectCard
		img=""  
		title="Business Africa"
		description="this is my description"
	/>
	</ProjectCardGrid>
	

	</div>
	
	

)