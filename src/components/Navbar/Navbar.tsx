import style from "./navbar.module.css";
import Button from "../Button/Button";

import { UserButton, useSession } from "@clerk/nextjs";
import { Search, ShoppingCartIcon, Bell } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const user = useSession();
	const router = useRouter();
	const pathname = usePathname();
	const [searchInput, searchInputSet] = useState("");
	const [placeholderText, placeholderTextSet] = useState("");
	const [cartBadge, cartBadgeSet] = useState(false);
	const [bellBadge, bellBadgeSet] = useState(false);

	const availableRoutes = [
		{ name: "my-profile", path: "/my-profile" },
		{ name: "my-courses", path: "/my-profile/my-courses" },
		{ name: "instructor", path: "/instructor" },
	];

	const notFoundSet = () => {
		placeholderTextSet("Not Found");
		searchInputSet("");
	};

	const routeToPage = (arg: string) => {
		console.log(pathname === arg);
		if (arg === pathname) {
			placeholderTextSet("");
			searchInputSet("");
			return;
		}
		router.push(`${arg}`);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchInput === "") {
			return;
		}
		const input = cleanInput(searchInput);
		availableRoutes.map((item) =>
			item.name === input ? routeToPage(item.path) : notFoundSet()
		);
	};

	const navigationRoutes = [
		{ routeName: "Courses", path: "courses" },
		{ routeName: "Projects", path: "projects" },
		{ routeName: "Pricing", path: "pricing" },
		{ routeName: "For Business", path: "for-business" },
		{ routeName: "More", path: "more" },
	];
	return (
		<main className={style.main}>
			{/* logo section */}
			<section>
				<Image
					src={"/logo.jpeg"}
					width={230}
					height={50}
					alt="logo"
					quality={100}
					className={style.logo}
					onClick={() => router.push("/")}
				/>
			</section>
			{/* nav section */}
			<section className={style.navigation_routes}>
				{navigationRoutes.map((route) => (
					<div
						key={route.routeName}
						tabIndex={0}
						className={style.nav}
					>
						{route.routeName}
					</div>
				))}
				{/* <button>
					<Search />
				</button> */}
				<div className={style.button_spacers}>
					<form
						className={style.search_form}
						onSubmit={(e) => handleSubmit(e)}
					>
						<Button
							variant="ghost"
							size="icon"
							rounded={true}
							type="submit"
						>
							<Search />
						</Button>
						<input
							type="text"
							value={searchInput}
							className={style.form_input}
							onChange={(e) => searchInputSet(e.target.value)}
							placeholder={placeholderText}
						/>
					</form>
					<Button
						variant="ghost"
						size="icon"
						rounded={true}
						onClick={() => cartBadgeSet((prev) => !prev)}
					>
						<ShoppingCartIcon />
						{cartBadge && <div className={style.badge}>1</div>}
					</Button>
					{user.isSignedIn && (
						<Button
							variant="ghost"
							size="icon"
							rounded={true}
							onClick={() => bellBadgeSet((prev) => !prev)}
						>
							<Bell />
							{bellBadge && (
								<div className={style.badge_dot}>.</div>
							)}
						</Button>
					)}
				</div>
				<div>
					{user.isSignedIn ? (
						<UserButton afterSignOutUrl="/" />
					) : (
						<div className={style.button_spacers}>
							<button
								className={style.sign_in_button}
								onClick={() => router.push("/sign-in")}
							>
								Sign in
							</button>
							<Button
								variant="outline"
								onClick={() => router.push("/sign-in")}
							>
								Start free Trial
							</Button>
						</div>
					)}
				</div>
			</section>
		</main>
	);
};

const cleanInput = (args: string) => {
	const inputs = args.split(" ").map((item) => item.toLocaleLowerCase());
	const res = inputs.join("-");
	return res;
};

export default Navbar;
