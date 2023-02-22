import { useState } from "react"
import { FaChevronDown, FaChevronLeft } from "react-icons/fa"

export default function Filter({ regionFilter, setRegionFilter }) {
	const [dropDown, setDropDown] = useState(false)

	const handleClick = () => {
		setDropDown(prevState => !prevState)
	}

	const handleSelection = region => {
		setRegionFilter(region)
	}

	return (
		<div
			onClick={handleClick}
			className='relative w-3/5 text-black transition-all 
			dark:text-white
			sm:max-w-sm'
		>
			<button
				className='flex w-full items-center justify-between rounded-lg bg-white py-3 px-6 shadow-md shadow-black/5 transition-all
				dark:bg-blue-dark'
			>
				<h1>{!regionFilter ? "Filter by Region" : regionFilter}</h1>
				<div className='relative'>
					<FaChevronDown
						className={`absolute text-sm text-gray-dark transition-all duration-500
						${dropDown && "translate-y-full"}`}
					/>
					<FaChevronLeft
						className={`text-sm text-gray-dark transition-all duration-500
						${!dropDown && "-translate-y-full"}`}
					/>
					<div
						className='absolute top-full h-full w-full bg-white transition-all
					dark:bg-blue-dark'
					></div>
					<div
						className='absolute -top-full h-full w-full bg-white transition-all
					dark:bg-blue-dark'
					></div>
				</div>
			</button>
			<div
				className={`absolute mt-1 block w-full origin-top cursor-default 
					rounded-lg bg-white py-3 px-3 shadow-md shadow-black/5 transition-all 
					dark:bg-blue-dark
					${!dropDown && "scale-y-0"}`}
			>
				<ul className='flex flex-col gap-1'>
					<li
						onClick={() => handleSelection("Africa")}
						className='rounded-md px-3 hover:bg-gray-dark hover:text-white
						dark:hover:bg-blue-veryDark'
					>
						Africa
					</li>
					<li
						onClick={() => handleSelection("Americas")}
						className='rounded-md px-3 hover:bg-gray-dark hover:text-white
						dark:hover:bg-blue-veryDark'
					>
						Americas
					</li>
					<li
						onClick={() => handleSelection("Asia")}
						className='rounded-md px-3 hover:bg-gray-dark hover:text-white
						dark:hover:bg-blue-veryDark'
					>
						Asia
					</li>
					<li
						onClick={() => handleSelection("Europe")}
						className='rounded-md px-3 hover:bg-gray-dark hover:text-white
						dark:hover:bg-blue-veryDark'
					>
						Europe
					</li>
					<li
						onClick={() => handleSelection("Oceania")}
						className='rounded-md px-3 hover:bg-gray-dark hover:text-white
						dark:hover:bg-blue-veryDark'
					>
						Oceania
					</li>
					<li
						onClick={() => handleSelection(undefined)}
						className='rounded-md px-3 hover:bg-gray-dark hover:text-white
						dark:hover:bg-blue-veryDark'
					>
						🌎 any region
					</li>
				</ul>
			</div>
		</div>
	)
}
