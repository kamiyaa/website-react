import React from 'react';

import { ProjectHeader } from ".";

const GameOfLifeProject = {
	Name: "Game of Life",
	Description: "Game of Life Simulator",
	Url: "https://github.com/kamiyaa/game-of-life",
	Language: "Rust, Javascript, WebAssembly",
	Owner: "kamiyaa",
	RepoName: "game-of-life",
	PreviewImgUrl: "https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png",
	PreviewThumbnailUrl: "https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png",
	Tags: [ "Rust",
		"WebAssembly",
		"Javascript",
		"Webpack"
	],
	GithubStats: {},
};

function GameOfLifeProjectComponent() {
	return (
	<div>
	<ProjectHeader project={GameOfLifeProject}/>
	<p>
		<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://kamiyaa.github.io/game-of-life/"><button>
		Try it here!
		</button></a>
	</p>
	<p>This was my first exposure to Rust's WebAssembly facilities. From this
I've learned lots about how Rust/WebAssembly interfaces with Javascript. I also
learned more about webpack and how to package Javascript apps to be deployable
on the web.
	</p>
	</div>
	);
}

export { GameOfLifeProject, GameOfLifeProjectComponent };

export default GameOfLifeProject;
