"use client";

import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { DemoInstructor } from "./instructorData";
import CoursesCard from "@/components/CoursesCard/CoursesCard";
import Footer from "@/components/Footer/Footer";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageRoute from "@/components/PageRoute/PageRoute";

import Image from "next/image";
import { StarIcon, Users2Icon, BookTextIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const InstructorPage = () => {
	const pathname = usePathname();
	return (
		<main className={style.main}>
			<Navbar />
			{/* content */}
			<section className={style.content}>
				{/* route of the page */}
				<PageRoute pathName={pathname} />
				{/* instructor details */}
				<div className={style.profile}>
					{/* instructor card */}
					<div className={style.about}>
						<AboutCard
							name={DemoInstructor.name}
							description={DemoInstructor.description}
							rating={DemoInstructor.rating}
							profileImage={DemoInstructor.profileImage}
						/>
						<InstructorStats
							totalStudents={DemoInstructor.totalStudents}
							courses={DemoInstructor.courses}
						/>
					</div>
					{/* courses offered */}
					<div className={style.about_body}>
						{/* about me section */}
						<div className={style.about_me}>
							<div>About Me</div>
							<p>{DemoInstructor.aboutMe}</p>
						</div>
						{/* all courses */}
						<div className={style.my_courses}>
							<div>My Courses</div>
							<section className={style.courses_card}>
								{DemoInstructor.coursesOffered.map(
									(course, idx) => (
										// individual course card
										<CoursesCard key={idx} data={course} />
									)
								)}
							</section>
						</div>
					</div>
				</div>
			</section>
			<NewsLetter />
			<Footer />
		</main>
	);
};

type AboutCardProps = {
	name: string;
	description: string;
	rating: number;
	profileImage: string;
};

const AboutCard = ({
	name,
	description,
	rating,
	profileImage,
}: AboutCardProps) => {
	return (
		<div className={style.about_card_main}>
			<div className={style.about_card_profile_image}>
				<Image
					src={profileImage}
					alt={name}
					objectFit="cover"
					layout="fill"
				/>
			</div>
			<div className={style.about_card_rating}>
				<div className={style.about_card_rating_heading}>{name}</div>
				<p>{description}</p>
				<div>
					<span style={{ fontSize: "12px" }}>{rating}</span>
					<span>
						{<StarIcon fill="orange" color="orange" size={18} />}
						{<StarIcon fill="orange" color="orange" size={18} />}
						{<StarIcon fill="orange" color="orange" size={18} />}
						{<StarIcon fill="orange" color="orange" size={18} />}
						{<StarIcon fill="orange" color="orange" size={18} />}
					</span>
				</div>
			</div>
		</div>
	);
};
type InstructorStatsType = {
	totalStudents: number;
	courses: number;
};
const InstructorStats = ({ totalStudents, courses }: InstructorStatsType) => {
	return (
		<div className={style.stat_main}>
			<div className={style.stat_total}>
				<div className={style.stat_icon}>
					<Users2Icon size={18} />
				</div>
				<div className={style.stat_data}>
					<span className={style.stat_title}>Total Students</span>
					<span className={style.stat_value}>{totalStudents}</span>
				</div>
			</div>
			<div className={style.stat_total}>
				<div className={style.stat_icon}>
					<BookTextIcon size={18} />
				</div>
				<div className={style.stat_data}>
					<span className={style.stat_title}>Courses</span>
					<span className={style.stat_value}>{courses}</span>
				</div>
			</div>
		</div>
	);
};

export default InstructorPage;
