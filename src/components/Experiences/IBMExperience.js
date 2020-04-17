import React from 'react';

import { ExperienceHeader } from ".";
import { ATab } from "../";

const IBMExperience = {
	title: "Open Source Runtime Developer",
	company: "IBM",
	companyUrl: "https://www.ibm.com/",
	startDate: "May 2019",
	endDate: "April 2020",
	previewImgUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/IBM.jpg",
	previewThumbnailUrl: "https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/IBM.jpg",
	tags: [ "C",
		"Java",
		"Docker",
		"Jenkins",
		"Appsody",
		"Maven",
		"Capstone",
		"Linux",
		"AIX",
		"z/OS",
		"PowerPC",
		"Systemz"
	],
}

function IBMExperienceComponent() {
	return (
<div>
<ExperienceHeader experience={IBMExperience}/>
<br/>

<p>
Being part of the <b>Runtimes</b> team here at IBM, I was responsible for
working <ATab href="https://www.eclipse.org/openj9/">OpenJ9</ATab>,
IBM's own open source implementation of Java.
</p>
<br/>

<h5><b>Disassembler Work</b></h5>
<p>
<b>Background:</b>
<br/>

When a Java program running with OpenJ9 crashes, a <ATab href="https://en.wikipedia.org/wiki/Core_dump">
core dump</ATab> is produced. This core dump allows developers of OpenJ9 to
investiage the cause of the crash and come up with a solution to fix it.
To analyze these core dumps, our team has developed a diassembler to read
the core dumps for all IBM platforms.
But in order to keep this tool up to date, a lot of work is required to add
support for new instructions sets whenever new cpu architectures are released.
</p>
<br/>

<p>
My first task was to port our internal disassembler to
use <ATab href="http://www.capstone-engine.org/">Capstone</ATab>,
an open source disassembler library. This effort immediately added support
for <b>z13, z14 and Power9</b> instructions to our disassembler,
eliminating months of potential work needed to add those instructions.
</p>
<br/>

<p>
Often when debugging a core dump, it requires a lot of time and effort to reach
certain points of the program. Developers wanted a way to easily restore sessions
and more powerful scripting support.
My next task was to alleviate this problem by adding scripting support
via <ATab href="https://www.lua.org/">Lua</ATab>. <b>Lua</b> is
a great option to choose for our workflows because it was embeddable,
allowing us to compile Lua only once and statically-linking it to our disassembler.
This scripting support allowed users to quickly restore their debugging sessions
and do much more powerful data manipulations.
</p>
<br/>

<p>More recently <ATab href="https://www.eclipse.org/openj9/">OpenJ9</ATab> added
support for <b>AArch64</b> and the team was given hardware to test with.
I was responsible for adding and enabling AArch64 support to our disassembler.
</p>
<br/>

<p>
Other features I've worked on for our internal disassembler:
</p>
<br/>

<ul>
<li>Add support for demangling C++ names</li>
<li>Refactor code base to be more maintainable</li>
<li>Refactor build system to support cross compilations in the future</li>
</ul>
<br/>

<p>
All this required me to ensure it worked on all IBM-supported platforms,
such as AIX, zOS, LinuxPPC and zLinux.
</p>
<br/>

<h5><b>OpenJ9's Shared Class Cache</b></h5>
<p>
One of the features OpenJ9 has
is the <ATab href="https://developer.ibm.com/tutorials/j-class-sharing-openj9/">
Shared Classes Cache</ATab>.
What it allows is for the OpenJ9 JVM to produce a cache of the Java classes
used by the running program. By default, this feature is only enabled for
Java std classes because it is still experimental.
I was responsible for exploring and expanding its current usage.
You can read more about it on the OpenJ9 blog post <ATab
href="https://blog.openj9.org/2019/12/17/developing-with-appsody-and-openj9-scc/">
here</ATab>.
</p>
<br/>

<h5><b>Conclusions Of My Internship</b></h5>
<p>
Coming in May 2020
</p>
</div>
	);
}

export { IBMExperience, IBMExperienceComponent };

export default IBMExperience;
