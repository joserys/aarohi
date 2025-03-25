import Text from "./text";

const HeadingDate = ({title, date}) => {
	return(
		<div className="width-12">
			<Text type="heading" classOverride="width-6 lefty">{title}</Text>
			<Text type="heading" classOverride="width-6 righty">{date}</Text>
		</div>
	);
}

export default HeadingDate;