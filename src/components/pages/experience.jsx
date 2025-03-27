import Text from "../modules/text";
import HeadingDate from "../modules/heading-date";
import Url from "../modules/url";

const Experience = () => {
	return (
		<>
			<Text type="title" classOverride="width-12">Experience</Text>
			<article>
				<Text type="sub-title">Research Experience</Text>

				<HeadingDate title="Graduate Research Assistant (NLP Group @ Notre Dame)" date="August 2021 - Present"/>
				<ul>
					<li>Student researcher in the Natural Language Processing Group under Dr. David Chiang</li>
					<li>Conducting research on NLP for dialects and language varieties, specifically adapting language
						models and improving robustness of subword tokenization methods.</li>
				</ul>

				<HeadingDate title="Undergraduate Research Assistant" date="May 2018 - May 2021" />
				<ul>
					<li>Student researcher in the Computational Linguistics at Yale (CLAY) Lab under Dr. Robert Frank.</li>
					<li>Conducted research on syntactic parsing, domain adaptation, semantic parsing and meaning
						representations, and Tree Adjoining Grammar.</li>
					<li>Awarded the Grace Hopper College Richter Summer Fellowship to pursue research (Summer 2019).</li>
				</ul>

				<HeadingDate title="Student Researcher (YGDP @ Yale)" date="May 2020 - July 2020" />
				<ul>
					<li>Student researcher for the Yale Grammatical Diversity Project.</li>
					<li>Conducted research on dialects in American English, particularly related to hedging and interlocutor
						perception of microsyntactic variation.</li>
				</ul>

				<HeadingDate title="Research Internship (RSI @ MIT)" date="June 2016 - August 2016" />
				<ul>
					<li>Student researcher in the Computer Science and Artificial Intelligence Laboratory (CSAIL) under Dr.
						Justin Solomon.</li>
					<li>Conducted research investigating the stability of the common line method (building on Fourier
						Projection-Slice Theorem) in noisy cryo-electron micrographs.</li>
				</ul>
			</article>
			<article>
				<Text type="sub-title">Teaching Experience</Text>

				<HeadingDate title="Guest Lecturer for NLP (Notre Dame)" date="Fall 2023" />
				<ul>
					<li>Gave three full-length lectures.</li>
				</ul>

				<HeadingDate title="Graduate Teaching Assistant for NLP (Notre Dame)" date="Fall 2021, Fall 2023" />
				<ul>
					<li>Held weekly office hours to review important course concepts and debug Python/Pytorch code for
						assignments.</li>
					<li>Graded assignments with coding and written components.</li>
					<li>Designed a project assignment from scratch.</li>
					<li>Guided students as they worked on their course projects</li>
				</ul>

				<HeadingDate title="Instructor (Inspirit AI)" date="June 2020 - January 2021" />
				<ul>
					<li>Instructor for the Inspirit AI program for five cohorts of high school students.</li>
					<li>Conducted lectures on various artificial intelligence topics including NLP, computer vision, and
						deep learning.</li>
					<li>Curriculum development for new NLP sessions for advanced students; coded a new project in Python.
					</li>
					<li>Mentored students in NLP project on intent classification of voice commands.</li>
				</ul>

				<HeadingDate title="Undergraduate Learning Assistant for NLP (Yale)" date="Spring 2020, Spring 2021" />
				<ul>
					<li>Held weekly office hours to review important course concepts for exams and debug Python/Pytorch code
						for assignments. </li>
					<li>Graded assignments with coding and written components.</li>
					<li>Worked on assignment and exam design.</li>
				</ul>

				<HeadingDate title="Science and Quantitative Reasoning Tutor (Yale)" date="Fall 2019" />
				<ul>
					<li>Created lesson plans for tutoring sessions.</li>
					<li>Explained material relevant for assignments and final exam.</li>
				</ul>
			</article>
			<article>
				<Text type="sub-title">Service and Outreach</Text>

				<HeadingDate title="Program Chair and Organizer, MSLD 2025" date="November 2024 - Present" />
				<ul>
					<li>Served as the program chair for the 2025 Midwest Speech and Language Days (MSLD) conference and took on additional organizational duties.</li>
				</ul>

				<HeadingDate title="Member, Programming Committee (VarDial)" date="January 2024 - Present" />
				<ul>
					<li>Member of the programming committee of the Workshop on NLP for Similar Languages, Varieties, and Dialects (VarDial).</li>
				</ul>

				<HeadingDate title="Department Representative, Graduate Student Government (Notre Dame)" date="August 2023 - Present" />
				<ul>
					<li>Discussed department- and university-level graduate student concerns and policies.</li>
				</ul>

				<HeadingDate title="Organizer, CSE Prospective PhD Student Day (Notre Dame)" date="February 2024" />
				<ul>
					<li>Helped organize prospective student visits and on-campus activities.</li>
				</ul>

				<HeadingDate title="Member, CSE Graduate Student Board (Notre Dame)" date="August 2023 - May 2024" />
				<ul>
					<li>Organized several activities and events to foster a sense of community among CSE graduate students.</li>
				</ul>

				<HeadingDate title="Organizer, NL+ Seminar Series (Notre Dame)" date="August 2022 - April 2023" />
				<ul>
					<li>In charge of arranging weekly internal and external speakers, fostering post-talk discussion,
						facilitating travel arrangements, arranging pre-seminar lunches, and communicating with seminar
						attendees.</li>
				</ul>

				<HeadingDate title="Volunteer, St. Margaret’s House (South Bend, IN)" date="August 2022 - Present" />
				<ul>
					<li>Volunteer at St. Margaret’s House for women and children.</li>
				</ul>

				<HeadingDate title="President and Volunteer Teaching Assistant, SheCode (Yale University)" date="Spring 2018 - Spring 2021" />
				<ul>
					<li>Taught computer science principles to middle and high school girls.</li>
					<li>Organized sessions, recruited volunteers, communicated with the community/school liaison, and
						managed paperwork.</li>
				</ul>

				<HeadingDate title="Technology Coordinator and Volunteer, No Closed Doors (New Haven, CT)" date="Fall 2018 - Spring 2021" />
				<ul>
					<li>Helped New Haven community members with job search and applications.</li>
				</ul>
			</article>
			<article>
				<Text type="sub-title">Additional Work Experience</Text>

				<HeadingDate title="Software Engineering Internship (Tact.ai, Sunnyvale, CA)" date="Summer 2021" />
				<ul>
					<li>Software Engineering Internship (Tact.ai, Sunnyvale, CA)</li>
					<li>Intern on the AI Team working on semantic parsing.</li>
					<li>Implemented error analysis metrics of the ML model in Python with Pytorch.</li>
					<li>Developed a new decoding algorithm, implemented in Python.</li>
					<li>Presented my project to the top executives at the end of the internship.</li>
				</ul>

				<HeadingDate title="Student Coder, Linguistics Department (Yale University)" date="Summer 2019" />
				<ul>
					<li>Work acknowledged in the following publication: Kotek, Hadas, et al. &ldquo;Gender representation in linguistic example sentences.&rdquo;
						<em>Proceedings of the Linguistic Society of America</em> 5.1 (2020): 514-528. <Url file={true} link="https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/download/4723/4342">Available here</Url>.
					</li>
				</ul>

				<HeadingDate title="STEM Representative, Office of Undergraduate Admissions (Yale University)" date="Spring 2018, Spring 2019" />
				<ul>
					<li>Representative for STEM at Yale with the Office of Undergraduate Admissions.</li>
				</ul>
			</article>
			<article>
				<Text type="sub-title">Programming Language and Software</Text>
				<ul>
					<li>Proficient in Python, C, R, MATLAB, Racket (Lisp), Bash (Linux).</li>
				</ul>
			</article>
		</>
	);
}

export default Experience;
