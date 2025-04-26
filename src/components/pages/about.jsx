import Text from "../modules/text";
import Url from "../modules/url";
import PublicationLabel from "../modules/publicationLabel";
import HeadingDate from "../modules/heading-date";

const About = () => {
	return (
		<>
			<Text type="title" classOverride="width-12">About Me</Text>
			<Text>
				I'm a fourth-year Ph.D. candidate in
				computer science at the University of Notre Dame. I work in Dr. David Chiang's <Url link="https://nlp.nd.edu/" external={true}>Natural Language Processing</Url> (NLP) lab. I am passionate about NLP research and applications, particularly related
				to language modeling and downstream tasks in low-resource settings. I graduated from
				Yale University with a B.S. in Computer Science, where I worked in the <Url link="https://clay.yale.edu/" external={true}>computational linguistics</Url> lab. I am originally from Morgantown, West Virginia.
			</Text>

			<Text type="sub-title">Education</Text>

			<HeadingDate title="University of Notre Dame, South Bend, IN" date="August 2021 - Present" />
			<ul>
				<li>Ph.D. Candidate in Computer Science and Engineering (CSE).</li>
			</ul>

			<HeadingDate title="Yale University, New Haven, CT" date="August 2017 - May 2021" />
			<ul>
				<li>B.S. in Computer Science.</li>
			</ul>

			<HeadingDate title="Morgantown High School, Morgantown, WV" date="August 2013 - May 2017" />
			<ul>
				<li>National Advanced Placement (AP) Scholar.</li>
			</ul>

			<Text type="sub-title">Research Publications</Text>
			<ul>
				<li>Aarohi Srivastava and David Chiang. “We're Calling an Intervention: Exploring the Fundamental Hurdles in Adapting Language Models to Nonstandard Text.” In <i>Proceedings of the Workshop on Noisy and User-Generated Text</i> (2025). <Url link="https://arxiv.org/abs/2404.07304" external={true}>Available here</Url>. <PublicationLabel icon='fa-solid fa-trophy' title='Best Paper Award'/></li> <br />
				<li>Fahim Faisal, Orevaoghene Ahia, Aarohi Srivastava, Kabir Ahuja, David Chiang, Yulia Tsvetkov, and Antonios Anastasopoulos. “DialectBench: An NLP Benchmark for Dialects, Varieties, and Closely-Related Languages.” In <i>Proceedings of the Association for Computational Linguistics</i> (2024). <Url link="https://aclanthology.org/2024.acl-long.777/" external={true}>Available here</Url>. <PublicationLabel icon='fa-solid fa-trophy' title='Best Social Impact Paper Award'/></li><br />
				<li>Aarohi Srivastava and David Chiang. “BERTwich: extending BERT's capabilities to model dialectal and noisy text.” In Findings of the Association for Computational Linguistics: EMNLP (2023). <Url link="https://aclanthology.org/2023.findings-emnlp.1037/" external={true}>Available here</Url>.</li><br />
				<li>Aarohi Srivastava and David Chiang. “Fine-Tuning BERT with Character-Level Noise for Zero-Shot Transfer to Dialects and Closely-Related Languages.” In <i>Proceedings of the Workshop on NLP for Similar Languages, Varieties and Dialects</i> (2023). <Url link="https://aclanthology.org/2023.vardial-1.16/" external={true}>Available here</Url>. <PublicationLabel icon='fa-solid fa-trophy' title='Shared Task Winner'/></li><br />
				<li>Aarohi Srivastava, Abhinav Rastogi, Abhishek Rao, Abu Awal Md Shoeb, Abubakar Abid, Adam Fisch, and others (in alphabetical order). “Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models.” Transactions on Machine Learning Research (2023). <Url link="https://openreview.net/pdf?id=uyTL5Bvosj" external={true}>Available here</Url>. <PublicationLabel icon='fa-solid fa-trophy' title='Outstanding Paper Finalist'/></li><br />
				<li>Aarohi Srivastava, Robert Frank, Sarah Widder, and David Chartash. “The Role of Linguistic Features in Domain Adaptation: TAG Parsing of Questions.” In <i>Proceedings of the Society for Computation in Linguistics</i> (2020). <Url link="https://aclanthology.org/2020.scil-1.33/" external={true}>Available here</Url>.</li><br />
				<li>Aarohi Srivastava. “Doxastic Feel Like (That).” In Yale Working Papers in Grammatical Diversity 4 (2020). <Url link="https://elischolar.library.yale.edu/ygdp/4/" external={true}>Available here</Url>.</li>
			</ul>
		</>
	);
}

export default About;