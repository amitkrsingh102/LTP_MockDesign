import style from "./Footer.module.css";

import {
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	LinkedinIcon,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
	const FooterLinks = [
		{ title: "CourseWhiz Business" },
		{ title: "Tech on CourseWhiz" },
		{ title: "About us " },
		{ title: "Terms & Privacy Policy" },
		{ title: "Help and Support" },
	];
	return (
		<footer className={style.footer}>
			<div className={style.footer_content}>
				{/* logo */}
				<div className={style.footer_logo}>
					<Image
						src={"/darkLogo.jpg"}
						alt="darkLogo"
						objectFit="cover"
						layout="fill"
					/>
				</div>
				{/* links */}
				<div className={style.footer_links}>
					{FooterLinks.map((link) => (
						<span key={link.title}>{link.title}</span>
					))}
				</div>
				{/* social media */}
				<div className={style.footer_icons_container}>
					<div className={style.footer_icon}>
						<FacebookIcon color="none" fill="white" size={18} />
					</div>
					<div className={style.footer_icon}>
						<InstagramIcon color="white" size={18} />
					</div>
					<div className={style.footer_icon}>
						<TwitterIcon color="white" fill="white" size={18} />
					</div>
					<div className={style.footer_icon}>
						<LinkedinIcon color="none" fill="white" size={18} />
					</div>
				</div>
			</div>
			<div className={style.footer_copyright}>
				<span>
					©2023 -{" "}
					<span style={{ color: "black", fontWeight: 600 }}>
						Course
					</span>
					Whiz by Kryptonyte
				</span>
			</div>
		</footer>
	);
};

export default Footer;
