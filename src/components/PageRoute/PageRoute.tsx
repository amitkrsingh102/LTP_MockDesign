import style from "./PageRoute.module.css";
type PageRouterProps = {
	pathName: string;
};

const PageRoute = ({ pathName }: PageRouterProps) => {
	const formattedPathname = pathName
		.split("/")
		.map((item) => formatPathname(item));
	return (
		<div className={style.route_main}>
			{formattedPathname.map((item, idx) => (
				<span
					key={idx}
					className={`${
						idx !== formattedPathname.length - 1
							? style.route
							: style.route_bold
					}`}
				>
					{item === ""
						? "Home / "
						: `${item}${
								idx === formattedPathname.length - 1
									? ""
									: " / "
						  } `}
				</span>
			))}
		</div>
	);
};

export function formatPathname(input: string): string {
	const cleanedInput = input.startsWith("/") ? input.slice(1) : input;

	const parts = cleanedInput.split("/");
	const capitalizedParts = parts.map((part) => {
		const words = part.split("-");
		return words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	});
	return capitalizedParts.join(" / ");
}

export default PageRoute;
