import { SignIn } from "@clerk/nextjs";
import style from "./page.module.css";
const SignInPage = () => {
	return (
		<main className={style.main}>
			<SignIn />
		</main>
	);
};

export default SignInPage;
