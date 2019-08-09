import React from "react"

const ProjectCard = ({title, description, picture}) => (
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<div class="px-6 py-4">
    		<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    		<p class="text-gray-700 text-base">
      			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
   			</p>
  		</div>
	</div>

)

export default props => (
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="h-16 w-16 rounded-full mx-auto" src="avatar.jpg"/>
		<div class="px-6 py-4">
    		<div class="font-bold text-xl mb-2">{props.title}</div>
    		<p class="text-gray-700 text-base">{props.description}</p>
  		</div>
	</div>
	)