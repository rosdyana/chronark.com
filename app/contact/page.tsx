"use client";
import { Github, Mail, Twitter, Linkedin, AudioLines } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/rosdyana_kusuma",
		label: "Twitter",
		handle: "@rosdyana_kusuma",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:rosdyana.kusuma@gmail.com",
		label: "Email",
		handle: "rosdyana.kusuma@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/rosdyana",
		label: "Github",
		handle: "rosdyana",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/rosdyanakusuma/",
		label: "LinkedIn",
		handle: "rosdyanakusuma",
	},
	{
		icon: <AudioLines size={20} />,
		href: "https://soundcloud.com/rosdyanakusuma",
		label: "SoundCloud",
		handle: "rosdyanakusuma",
	},
	{
		icon: <AudioLines size={20} />,
		href: "https://open.spotify.com/artist/0w84Jd5n0odxceAr0OQjD2",
		label: "Spotify",
		handle: "Rosdyana Kusuma",
	}
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-4 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:grid-cols-3 lg:gap-8">
					{socials.map((s) => (
						<Card key={s.href}>
							<Link
								href={s.href}
								target="_blank"
								className="p-2 relative flex flex-col items-center gap-2 duration-700 group md:gap-4 md:py-12 lg:pb-24 md:p-8"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-lg font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
