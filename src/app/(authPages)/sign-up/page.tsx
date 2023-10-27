import { SignUp } from "@clerk/nextjs";
import style from "./page.module.css";
const SignInPage = () => {
	return (
		<main className={style.main}>
			<SignUp />
		</main>
	);
};

export default SignInPage;
