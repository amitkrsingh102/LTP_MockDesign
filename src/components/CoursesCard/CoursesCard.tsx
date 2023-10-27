import { type CoursesOffered } from "../../app/(userPages)/instructor/instructorData";
import style from "./CoursesCard.module.css";
import Image from "next/image";
import { StarIcon, BookTextIcon, Clock12Icon } from "lucide-react";

type CoursesCardPropType = {
	data: CoursesOffered;
};

const CoursesCard = ({ data }: CoursesCardPropType) => {
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
				<div className={style.card_rating}>
					<div className={style.card_type}>
						<span>{data.type}</span>
						<div>
							<span>{data.rating}</span>
							<span>
								<StarIcon
									fill="orange"
									color="orange"
									size={12}
								/>
							</span>
							<span>{`(${data.numberOfReviews})`}</span>
						</div>
					</div>
				</div>
				<div className={style.card_name}>{data.name}</div>
				<div className={style.card_lessons}>
					<div>
						<BookTextIcon color="orange" size={12} />{" "}
						<span>{data.lessons} Lessons</span>
					</div>
					<div>
						<Clock12Icon color="orange" size={12} />{" "}
						<span>{data.totalDuration}</span>
					</div>
				</div>
				<div className={style.card_pricing}>
					<div
						className={style.card_author}
					>{`by ${data.author}`}</div>
					<div className={style.card_price}>
						<span style={{ fontWeight: 600, color: "black" }}>
							${data.effectivePrice}
						</span>
						<span style={{ textDecoration: "line-through" }}>
							${data.oldPrice}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
