import React from 'react';

import { ProjectHeader } from ".";

const SpaceFarmerBotProject = {
	Name: "SpaceFarmerBot",
	Description: "Discord Bot",
	Url: "https://github.com/Tusk98/SpaceFarmerBot",
	Language: "Golang",
	Owner: "Tusk98",
	RepoName: "SpaceFarmerBot",
	PreviewImgUrl: "https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg",
	PreviewThumbnailUrl: "https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg",
	Tags: [ "Golang", "Discord", "Json" ],
	GithubStats: {},
};

function SpaceFarmerBotProjectComponent() {
	return (
	<div>
	<ProjectHeader project={SpaceFarmerBotProject}/>
	<p>
This project, I worked with a colleague to produce a fast, customized Discord bot for our servers.
We added support for serving images from image boards, reverse image searching images that user provides
and giving wiki data when user requested.
	</p>
<p>
	From this I was able to learn the basics of Go such as functions,
structs, methods and interfaces. I was hoping to learn a bit more about Go channels
but I guess that will have to wait for another time.
</p>
	</div>
	);
}

export { SpaceFarmerBotProject, SpaceFarmerBotProjectComponent };

export default SpaceFarmerBotProject;
