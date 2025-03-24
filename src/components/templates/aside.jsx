import Text from "../modules/text";
import Url from "../builds/url";

const Aside = () => {
	return (
		<aside className="aside background-3">
			<Text type="heading">Aarohi Srivastava</Text>
            <Text type="sub-heading">Ph.D student in Computer Sciences</Text>
			<Url icon="fa-solid fa-location-dot" link="https://www.nd.edu/" external={true}>University of Notre Dame</Url>
			<Url icon="fa-solid fa-school" link="https://nlp.nd.edu/" external={true}>Natural Language Processing</Url>
			<Url icon="fa-solid fa-envelope" link="mailto:asrivas2@nd.edu">Email</Url>
			<Url icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/aarohi-srivastava" external={true}>LinkedIn</Url>
			<Url icon="fa-brands fa-github" link="https://github.com/aarsri" external={true}>Github</Url>
		</aside>
    );
}

export default Aside;