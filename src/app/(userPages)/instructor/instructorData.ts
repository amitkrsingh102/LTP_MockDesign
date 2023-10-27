export type CoursesOffered = {
	thumbnail: string;
	type: string;
	rating: number;
	numberOfReviews: number;
	name: string;
	lessons: number;
	totalDuration: string;
	author: string;
	effectivePrice: number;
	oldPrice: number;
};

export type DemoInstructorType = {
	name: string;
	rating: number;
	description: string;
	profileImage: string;
	totalStudents: number;
	courses: number;
	aboutMe: string;
	coursesOffered: CoursesOffered[];
};
export const DemoInstructor: DemoInstructorType = {
	name: "Henry S. Miller",
	description: "Pro Photographer,  Videographer, Award Winning Youtuber",
	rating: 4.5,
	profileImage: "/instructor_image.jpg",
	totalStudents: 115144,
	courses: 16,
	aboutMe: `What is design thinking, and what part does it play in the wider scheme of user experience design?\n
	This short design thinking course will teach you the basics you need to kickstart your career as a digital designer in UX. You'll develop the knowledge and skills needed to successfully implement design thinking practices grounded in solid UX fundamentals in the workplace.\n
	By getting to grips with the design thinking framework, you'll be able to tackle large, complex and even unknown issues within product development. It will give you the tools, skills and mindset to seek out practical and logical innovation, and to take a solution-based view to solving problems as a UX designer.`,
	coursesOffered: [
		{
			name: "Beginner's Photography:\nBasic Camera Use and Theory",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/camera1.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Travel Photography with Mobile Phone for Beginneres",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/mobile1.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Photography and Darkness:\nCreate Cinematic Potraits",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/video1.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Video Marketing Strategy:\nCreate Ads for Instagram and Tik Tok",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/editing1.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Beginner's Photography:\nBasic Camera Use and Theory",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/camera2.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Travel Photography with Mobile Phone for Beginneres",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/mobile2.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Photography and Darkness:\nCreate Cinematic Potraits",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/video2.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Beginner's Photography:\nBasic Camera Use and Theory",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/camera3.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Photography and Darkness:\nCreate Cinematic Potraits",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/video3.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Video Marketing Strategy:\nCreate Ads for Instagram and Tik Tok",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/editing3.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Video Marketing Strategy:\nCreate Ads for Instagram and Tik Tok",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/editing4.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
		{
			name: "Travel Photography with Mobile Phone for Beginneres",
			rating: 4.5,
			type: "Development",
			numberOfReviews: 24,
			thumbnail: "/mobile3.jpg",
			lessons: 24,
			totalDuration: "12hr 30mins",
			author: "Henry S. Miller",
			effectivePrice: 5.45,
			oldPrice: 6.12,
		},
	],
};
