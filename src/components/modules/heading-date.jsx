import Text from "./text";

const HeadingDate = ({title, date}) => {
	return(
		<div className="double-heading">
			<Text type="heading" classOverride="left-heading">{title}</Text>
			<Text type="heading" classOverride="right-heading">{date}</Text>
		</div>
	);
}

export default HeadingDate;