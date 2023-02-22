import { FaMoon, FaSun } from "react-icons/fa"

export default function Header({ darkMode, darkModeToggle }) {
	console.log(darkMode)
	return (
		<div
			className='text-md flex h-24 select-none items-center justify-between bg-white px-4 shadow-md shadow-black/5 transition-all
			dark:bg-blue-dark dark:text-white
			sm:px-24'
		>
			<h1 className='font-bold'>Where in the world?</h1>
			<button
				onClick={darkModeToggle}
				className='flex items-center gap-2 font-semibold'
			>
				{darkMode ? <FaSun /> : <FaMoon />}
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
		</div>
	)
}
