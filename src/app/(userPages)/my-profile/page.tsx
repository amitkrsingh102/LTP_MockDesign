"use client";

import Navbar from "@/components/Navbar/Navbar";
import style from "./page.module.css";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";

import { usePathname, useRouter } from "next/navigation";
import PageRoute from "@/components/PageRoute/PageRoute";
import Button from "@/components/Button/Button";

const MyProfiePage = () => {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<main className={style.main}>
			<Navbar />
			{/* content */}

			<section className={style.content}>
				<PageRoute pathName={pathname} />
				<div className={style.navbtn}>
					<Button onClick={() => router.push("/")}>Home</Button>
					<Button
						onClick={() => router.push("/my-profile/my-courses")}
					>
						My Courses
					</Button>
				</div>
			</section>

			<NewsLetter />
			<Footer />
		</main>
	);
};

export default MyProfiePage;
