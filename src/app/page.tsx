"use client";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const user = useSession();
	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<h1>Welcome</h1>
				<p className={styles.message}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Sunt necessitatibus eius ipsum laudantium obcaecati
					temporibus magni corrupti, fugit inventore eligendi error
					asperiores explicabo facilis quisquam voluptate voluptatum
					nam aliquid iste?
				</p>
			</div>
			<div className={styles.btn}>
				{!user.isSignedIn && (
					<Button size="lg" onClick={() => router.push("/sign-in")}>
						Sign in
					</Button>
				)}
				<Button size="lg" onClick={() => router.push("/instructor")}>
					Get Started
				</Button>
			</div>
		</main>
	);
}
