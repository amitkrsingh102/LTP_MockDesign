import React from "react";
import style from "./button.module.css";

type ButtonPropTypes = {
	variant?: "default" | "outline" | "ghost";
	size?: "normal" | "sm" | "lg" | "icon";
	rounded?: boolean;
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

const Button = ({
	variant = "default",
	size = "normal",
	rounded = false,
	...props
}: ButtonPropTypes) => {
	const variantStyle = style[variant];
	const sizeStyle = style[size];
	return (
		<button
			className={`${style.main_style} ${variantStyle} ${sizeStyle} ${
				rounded && style.rounded
			}`}
			{...props}
		></button>
	);
};

export default Button;
