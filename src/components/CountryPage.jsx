import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

export default function CountryPage({
	cards,
	cardSelected,
	setCardSelected,
	formatNumber,
	backButton,
}) {
	// Borders countries state
	const [borderCountries, setBorderCountries] = useState([])

	// Set country parameters
	const nativeName =
		cardSelected.nativeName[Object.keys(cardSelected.nativeName)[0]]
			.official

	const currencies = Object.values(cardSelected.currencies).map(
		obj => Object.values(obj)[0]
	)

	const languages = Object.values(cardSelected.languages).join(", ")

	// Set borders countries when the selected country changes
	useEffect(() => {
		let arr = []
		cardSelected.borders &&
			cardSelected.borders.map(value => {
				arr.push(cards.find(obj => obj.symbol === value))
			})
		setBorderCountries(arr)
	}, [cardSelected])

	const bordersElements = borderCountries.map(value => {
		return (
			<button
				onClick={() => setCardSelected(value)}
				className='rounded-sm bg-white py-3 px-6 shadow-md
				dark:bg-blue-dark dark:text-white'
				key={value.name}
			>
				{value.commonName}
			</button>
		)
	})

	return (
		<div
			className='px-6 py-6
			dark:text-white
			sm:px-0'
		>
			{/* back button */}
			<button
				className='flex h-12 items-center justify-between gap-3
                rounded-lg bg-white px-6 
                shadow-md shadow-black/5
				dark:bg-blue-dark dark:text-white'
				onClick={backButton}
			>
				<FaArrowLeft className='text-sm' />
				Back
			</button>

			{/* Country info */}
			<div
				className='my-12
				sm:grid sm:grid-flow-col sm:grid-cols-2 sm:items-center sm:gap-32'
			>
				<div className='select-none'>
					<img
						src={cardSelected.flag}
						alt={`Flag of ${cardSelected.commonName}`}
						className='pointer-events-none'
					/>
				</div>
				<div
					className='my-12 space-y-6
					sm:my-0'
				>
					<h1 className='text-2xl font-bold'>{cardSelected.name}</h1>
					<div
						className='space-y-6
						sm:grid sm:grid-flow-col sm:gap-8'
					>
						<ul className='space-y-1'>
							<li>
								<span className='font-semibold'>
									Native Name:{" "}
								</span>
								{nativeName}
							</li>
							<li>
								<span className='font-semibold'>
									Population:{" "}
								</span>
								{formatNumber(cardSelected.population)}
							</li>
							<li>
								<span className='font-semibold'>Region: </span>
								{cardSelected.region}
							</li>
							<li>
								<span className='font-semibold'>
									Sub Region:{" "}
								</span>
								{cardSelected.subRegion}
							</li>
							<li>
								<span className='font-semibold'>Capital: </span>
								{cardSelected.capital}
							</li>
						</ul>
						<ul className='space-y-1'>
							<li>
								<span className='font-semibold'>
									Top Level Domain:{" "}
								</span>
								{cardSelected.topLevelDomain}
							</li>
							<li>
								<span className='font-semibold'>
									Currencies:{" "}
								</span>
								{currencies}
							</li>
							<li>
								<span className='font-semibold'>
									Languages:{" "}
								</span>
								{languages}
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-3 text-lg font-bold'>
							Border Countries:
						</h2>
						{cardSelected.borders ? (
							<div className='flex flex-wrap gap-2'>
								{bordersElements}
							</div>
						) : (
							"No Borders"
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
