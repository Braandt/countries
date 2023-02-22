import { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function Searchbar({ cards, searchResult, setSearchResult }) {
	const [isSearching, setIsSearching] = useState(false)
	const [value, setValue] = useState("")

	const handleFocus = () => {
		setIsSearching(prevState => !prevState)
	}

	const handleType = event => {
		setValue(event.target.value)
		const arr = cards
			.map(country => {
				if (
					country.commonName
						.toUpperCase()
						.startsWith(event.target.value.toUpperCase())
				) {
					return country.commonName
				}
			})
			.filter(x => x)
		setSearchResult(arr)
	}

	const onSearch = searchTerm => {
		setValue(searchTerm)
		setSearchResult([searchTerm])
	}

	return (
		<div className='relative'>
			<div
				onFocus={handleFocus}
				className='my-6 flex h-12 items-center justify-center 
				rounded-lg bg-white px-4 
				shadow-md shadow-black/5 transition-all 
				focus-within:-translate-y-0.5 focus-within:shadow-lg
				dark:bg-blue-dark
				sm:max-w-2xl'
			>
				<FaSearch
					className='mx-5 text-2xl text-gray-400 transition-all
					dark:text-white'
				/>
				<input
					onChange={handleType}
					type='text'
					placeholder='Search for a country...'
					className='h-full w-full transition-all
					focus:outline-0
					dark:bg-blue-dark dark:text-white'
					value={value}
				/>
			</div>
			{isSearching && value != "" && (
				<div
					onMouseLeave={handleFocus}
					onClick={handleFocus}
					className='absolute z-10 -my-5 w-full  rounded-lg bg-white px-6 py-3 shadow-lg shadow-black/5
					dark:bg-blue-dark dark:text-white'
				>
					<div className='max-h-44 space-y-1 overflow-y-auto'>
						{searchResult.map(countryName => (
							<div
								onClick={() => {
									onSearch(countryName)
								}}
								key={countryName}
								className='cursor-default rounded-md px-3 hover:bg-gray-dark hover:text-white'
							>
								{countryName}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
