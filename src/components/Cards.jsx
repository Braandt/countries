export default function Cards({ cards, formatNumber, cardSelection }) {
	// Define country card elements
	const cardsElements =
		cards &&
		cards.map((value, index) => (
			<Card
				country={value}
				key={index}
				formatNumber={formatNumber}
				cardSelection={() => cardSelection(index)}
			/>
		))

	return (
		<div
			className='my-12 flex flex-col items-center gap-12 px-9
			sm:flex-row sm:flex-wrap sm:justify-between sm:gap-2 sm:gap-y-12 sm:px-0
			'
		>
			{cardsElements}
		</div>
	)
}

const Card = ({ country, formatNumber, cardSelection }) => {
	// Define flag image as background
	const backgroundImage = {
		backgroundImage: `url(${country.flag})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
	}

	return (
		<button
			className='w-full rounded-lg bg-white text-left shadow-xl transition-all 
            hover:-translate-y-0.5 hover:shadow-2xl
            focus:-translate-y-0.5 focus:shadow-2xl
			dark:bg-blue-dark dark:text-white
			sm:w-80'
			onClick={cardSelection}
		>
			<div
				style={backgroundImage}
				className='aspect-video w-full rounded-t-lg'
			></div>
			<div className='px-6 py-6'>
				<h1 className='text-xl font-bold'>{country.name}</h1>
				<ul className='flex flex-col gap-1 py-3'>
					<li>
						<span className='font-semibold'>Population: </span>
						{formatNumber(country.population)}
					</li>
					<li className=''>
						<span className='font-semibold'>Region: </span>
						{country.region}
					</li>
					<li>
						<span className='font-semibold'>Capital: </span>
						{country.capital}
					</li>
				</ul>
			</div>
		</button>
	)
}
