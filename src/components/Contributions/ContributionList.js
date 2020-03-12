import React from 'react';

const ContributionDetails = [
{
	Name: "Capstone",
	Url: "https://github.com/aquynh/capstone",
	IconUrl: "http://www.capstone-engine.org/img/capstone.png",
	Description: "Multi-platform, multi-architecture disassembly framework",
	Language: "C",
	Component: (
	<ul>
		<li>Add build support for IBM platforms such as AIX and zOS</li>
		<li>Fix zOS instruction disassembly for instructions where base is 0 but index is not</li>
	</ul>
	),
},
{
	Name: "Portage",
	Url: "https://github.com/gentoo/gentoo",
	IconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Gentoo-logo-dark.svg",
	Description: "Official package manager and distribution system for Gentoo",
	Language: "Shell",
	Component: (
	<ul>
		<li>Package maintainer for <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://github.com/easymodo/qimgv">qimgv</a></li>
	</ul>
	),
},
{
	Name: "Maven",
	Url: "https://github.com/carlossg/docker-maven",
	IconUrl: "http://cdn.onlinewebfonts.com/svg/img_161017.png",
	Description: "Maven Dockerfiles",
	Language: "Scripting",
	Component: (
	<ul>
		<li>Add Dockerfile with <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.eclipse.org/openj9/">OpenJ9</a> as Java implementation</li>
	</ul>
	),
},
{
	Name: "Jenkins",
	Url: "https://github.com/jenkinsci/jenkins",
	IconUrl: "https://jenkins.io/images/logos/jenkins/256.png",
	Description: "Free and open source automation server",
	Language: "Scripting",
	Component: (
	<ul>
		<li>Add Dockerfile with <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.eclipse.org/openj9/">OpenJ9</a> as Java implementation
		with <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.eclipse.org/openj9/docs/shrc/">Shared Classes Cache</a> enabled</li>
		<li>Decrease memory usage by up to 40% and decrease startup times by up to 30%</li>
	</ul>
	),
},

];

const ContributionList = () => (
<div className="flex_card_list">
	{ ContributionDetails.map(function(contrib, index) {
		return (
<div className="horizontal_card">
	<a
		target="_blank"
		rel="noopener noreferrer"
		href={contrib.Url}>
		<img
			className="horizontal_card_icon"
			alt={contrib.Name}
			src={contrib.IconUrl}
		/>
	</a>
	<div className="horizontal_card_info">

		<h3 id={contrib.Name}>{contrib.Name}</h3>
		<h5>{contrib.Language}</h5>
		<p>{contrib.Description}</p>

		{contrib.Component}
	</div>
</div>
		);
	})
	}
</div>
);

export { ContributionDetails, ContributionList };
export default ContributionList;
