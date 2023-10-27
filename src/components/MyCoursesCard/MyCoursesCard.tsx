import style from "./MyCoursesCard.module.css";
import { CourseDataType } from "@/app/(userPages)/my-profile/my-courses/my-courses-data";

import { BookTextIcon, Clock12Icon, StarIcon } from "lucide-react";
import Image from "next/image";

type MyCoursesCardPropsType = {
	data: CourseDataType;
};

const MyCoursesCard = ({ data }: MyCoursesCardPropsType) => {
	return (
		<div className={style.card_main}>
			<div className={style.card_image}>
				<Image
					src={data.thumbnail}
					alt={data.name}
					objectFit={"cover"}
					layout="fill"
				/>
			</div>
			<div className={style.card_details}>
				<div className={style.card_type}>
					<span>{data.type}</span>
				</div>
				<div className={style.card_name}>
					<span>{data.name}</span>
				</div>
				<div className={style.card_rating}>
					<span>{data.rating}</span>
					<StarIcon fill="orange" color="orange" size={12} />
					<StarIcon fill="orange" color="orange" size={12} />
					<StarIcon fill="orange" color="orange" size={12} />
					<StarIcon fill="orange" color="orange" size={12} />
					<StarIcon fill="orange" color="orange" size={12} />
					<span>{`(${data.numberOfReviews})`}</span>
				</div>
				<div className={style.card_lessons}>
					<div>
						<BookTextIcon color="orange" size={14} />{" "}
						<span>{data.lessons} Lessons</span>
					</div>
					{"|"}
					<div>
						<Clock12Icon color="orange" size={14} />{" "}
						<span>{data.totalDuration}</span>
					</div>
				</div>
				<div className={style.card_description}>
					<p>{data.description}</p>
				</div>
				<div className={style.card_pricing}>
					<div
						className={style.card_author}
					>{`by ${data.author}`}</div>
				</div>
			</div>
		</div>
	);
};

export default MyCoursesCard;
