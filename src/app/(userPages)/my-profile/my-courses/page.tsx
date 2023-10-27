"use client";

import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import PageRoute from "@/components/PageRoute/PageRoute";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import MyCoursesCard from "@/components/MyCoursesCard/MyCoursesCard";
import { CourseDataType, myCourseData } from "./my-courses-data";
import { DemoInstructor } from "../../instructor/instructorData";
import CoursesCard from "@/components/CoursesCard/CoursesCard";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Button from "@/components/Button/Button";

type MyCourseRouteType = {
	title: "All Courses" | "In Progress" | "Completed";
	comparator: (value: CourseDataType) => boolean;
};

const MyCoursesPage = () => {
	const pathname = usePathname();
	const [currentCourseRoute, currentCourseRouteSet] =
		useState<MyCourseRouteType>({
			title: "All Courses",
			comparator: () => true,
		});
	const myCoursesRoute: MyCourseRouteType[] = [
		{
			title: "All Courses",
			comparator: () => {
				return true;
			},
		},
		{
			title: "In Progress",
			comparator: (f) => {
				return f.completionStatus !== true;
			},
		},
		{
			title: "Completed",
			comparator: (f) => {
				return f.completionStatus == true;
			},
		},
	];
	const handleRight = () => {
		let slider = document.getElementById("container");
		let width = slider?.clientWidth;
		slider!.scrollLeft = slider!.scrollLeft + width!;
	};
	const handleLeft = () => {
		let slider = document.getElementById("container");
		let width = slider?.clientWidth;
		slider!.scrollLeft = slider!.scrollLeft - width!;
	};
	return (
		<main className={style.main}>
			<Navbar />
			{/* content */}
			<section className={style.content}>
				{/* route of the page */}
				<PageRoute pathName={pathname} />
				{/* content */}
				<div className={style.my_courses}>
					<div className={style.my_courses_heading}>My Courses</div>
					<div className={style.my_courses_navigation}>
						{myCoursesRoute.map((route) => (
							<span
								key={route.title}
								className={`${
									currentCourseRoute.title === route.title
										? style.current_route
										: style.unselected_route
								}`}
								onClick={() => {
									currentCourseRouteSet({
										title: route.title,
										comparator: route.comparator,
									});
								}}
							>
								{route.title}
							</span>
						))}
					</div>
					<div className={style.my_courses_cards}>
						{myCourseData
							.filter(currentCourseRoute.comparator)
							.map((item, idx) => (
								<MyCoursesCard key={idx} data={item} />
							))}
					</div>
					<div className={style.recommendation}></div>
				</div>
			</section>
			<section className={style.recommended}>
				<div className={style.my_courses_heading}>
					Recommended for You
				</div>
				<div className={style.slider}>
					<div className={style.slider_main}>
						<div className={style.left_btn}>
							<Button
								rounded={true}
								size="icon"
								onClick={() => handleLeft()}
							>
								<ArrowLeftIcon />
							</Button>
						</div>
						<div className={style.slider_container} id="container">
							{DemoInstructor.coursesOffered.map((item, idx) => (
								<CoursesCard key={idx} data={item} />
							))}
						</div>
						<div className={style.right_btn}>
							<Button
								rounded={true}
								size="icon"
								onClick={() => handleRight()}
							>
								<ArrowRightIcon />
							</Button>
						</div>
					</div>
				</div>
			</section>
			<NewsLetter />
			<Footer />
		</main>
	);
};

export default MyCoursesPage;
