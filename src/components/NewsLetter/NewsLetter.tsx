import Button from "../Button/Button";
import style from "./NewsLetter.module.css";
const NewsLetter = () => {
	return (
		<section className={style.news_letter_main}>
			{/* 64/24 */}
			<div className={style.news_letter}>
				<div className={style.news_letter_title}>NEWSLETTER</div>
				<div className={style.news_letter_heading}>
					Get new offers on your email
				</div>
				<div className={style.news_letter_description}>
					Subscribe to get tips and tactic to grow the way you want
				</div>
				<form
					className={style.news_letter_form}
					onSubmit={(e) => e.preventDefault()}
				>
					<input type="email" placeholder="Your Email Address" />
					<Button size="lg" type="submit">
						Subscribe
					</Button>
				</form>
			</div>
		</section>
	);
};

export default NewsLetter;
