import React from 'react';

import { ExperienceHeader } from ".";

const TAExperience = {
	title: "Teaching Assistant",
	company: "University of Toronto",
	companyUrl: "https://www.utoronto.ca/",
	startDate: "September 2017",
	endDate: "December 2019",
	previewImgUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/UofT_002.jpg",
	previewThumbnailUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/UofT_002.jpg",
	tags: [ "C", "Python", "Java", "Shell",
		"SVN", "Design Patterns",
		"OOP/SOLID design", "Pipes/Sockets", ],
}

function TAExperienceComponent() {
	return (
<div>
	<ExperienceHeader experience={TAExperience}/>
<p>
Courses taught:
</p>
<ul>
<li><b>CSCA08 - Introduction to Computer Science I</b></li>
	Using Python, students are introduced to the fundamental concepts of programming
	such as variables, conditional statements, loops, functions, lists, and dictionaries.
	<br/>
	I was responsible for answering questions during anti-lectures, hosting office hours and marking exams.
<li><b>CSCA48 - Introduction to Computer Science II</b></li>
	Students are introduced to more advanced programming concepts with C such as structs,
	linked data structures and recursion.
	<br/>
	I taught a tutorial of 20-30 students; going over contents taught in lectures and
	coming up with additional examples to help students understand the course content better.
<li><b>CSCB07 - Software Design</b></li>
	Utilizing Java's Object-Oriented programming style, students are introduced to the concepts
	of good design and design patterns.
	<br/>
	I oversaw labs where students would apply techniques taught in class such as
	singleton, factory, builder, adapter, generics, interfaces and inheritance.
	I was also responsible for marking exams.
<li><b>CSCB09 - Software Tools and System Design</b></li>
	Using C, students are taught systems programming. Introducing concepts such as
	Makefiles, header files, pointers (and double pointers), file I/O, processes (fork),
	pipes and sockets.
	<br/>
	I was responsible for lab where students would apply techniques taught in class
	and marking exams.
</ul>
</div>
	);
}

export { TAExperience, TAExperienceComponent };

export default TAExperience;
