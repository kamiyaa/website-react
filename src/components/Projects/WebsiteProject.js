import React from 'react';

import { ProjectHeader } from ".";

const WebsiteProject = {
	Name: "Website",
	Description: "My Personal Website",
	Url: `https://github.com/kamiyaa/kamiyaa.github.io`,
	Language: "React.js, Sass",
	Owner: "kamiyaa",
	RepoName: "kamiyaa.github.io",
	PreviewImgUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/preview.png",
	PreviewThumbnailUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/preview.png",
	Tags: [ "Javascript", "React", "React Hooks", "Sass", "npm" ],
	GithubStats: {},
};

function WebsiteProjectComponent() {
	return (
	<div>
	<ProjectHeader project={WebsiteProject}/>
	<p>This is the project for my personal website.
	</p>
	<p>
	Originally, I planned to write it using just HTML/CSS.
	<br/>
But after doing some research, I realized that being able to
create <b>React</b> applications are very important and useful. Taking advantage
of this opportunity, I learned <b>Javascript</b> (and <b>ES6</b>) and React at the same time.
	</p>
	<p>One of the challenges I faced was just designing the website to be
easy to navigate as well as appealing to users. Design is not something I had
prior industry experience with so I had to do some research into designing
user-friendly and intuitive interfaces.
	<br/>
	Even after figuring out the design, translating it to sass/css was also
a learning curve I had to overcome.
	</p>
	</div>
	);
}

export { WebsiteProject, WebsiteProjectComponent };

export default WebsiteProject;
