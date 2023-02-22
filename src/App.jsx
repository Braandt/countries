import { useEffect, useState } from "react"
import CountryPage from "./components/CountryPage.jsx"
import Cards from "./components/Cards.jsx"
import Filter from "./components/Filter.jsx"
import Header from "./components/Header.jsx"
import Searchbar from "./components/Searchbar.jsx"

export default function App() {
	const [cards, setCards] = useState([])
	const [filteredCards, setFilteredCards] = useState([])
	const [cardSelected, setCardSelected] = useState(false)
	const [searchResult, setSearchResult] = useState([])
	const [regionFilter, setRegionFilter] = useState()
	const [darkMode, setDarkMode] = useState(false)

	// Get raw country data
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then(res => res.json())
			.then(raw => {
				setCards(
					raw.map(country => {
						return {
							name: country.name.official,
							commonName: country.name.common,
							nativeName: country.name.nativeName,
							continents: country.continents,
							capital: country.capital,
							flag: country.flags.svg,
							languages: country.languages,
							map: country.maps.googleMaps,
							population: country.population,
							region: country.region,
							subRegion: country.subregion,
							timezones: country.timezones,
							topLevelDomain: country.tld,
							currencies: country.currencies,
							borders: country.borders,
							symbol: country.cca3,
						}
					})
				)
			})
	}, [])

	useEffect(() => {
		setFilteredCards(cards)
	}, [cards])

	useEffect(() => {
		let tempArr = cards
		if (searchResult.length !== 0) {
			console.log(searchResult)
			tempArr = tempArr.filter(obj =>
				searchResult.includes(obj.commonName)
			)
		}
		if (regionFilter) {
			tempArr = tempArr.filter(obj => regionFilter == obj.region)
		}
		setFilteredCards(tempArr)
	}, [searchResult, regionFilter])

	// Handle country selection
	const handleCardSelection = index => {
		console.log(filteredCards)
		filteredCards.map((country, countryIndex) => {
			countryIndex === index && setCardSelected(country)
		})
	}

	// Format numbers
	const formatNumber = num => {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	}

	// Back button
	const backButton = () => {
		setCardSelected(false)
		setFilteredCards(cards)
	}

	const darkModeToggle = () => {
		setDarkMode(prevState => !prevState)
	}

	return (
		<div className={darkMode ? "dark" : ""}>
			<div
				className='min-h-screen bg-black/[0.02] transition-all
				selection:bg-gray-dark selection:text-gray-veryLight
				dark:bg-blue-veryDark 
				dark:selection:bg-gray-veryLight dark:selection:text-blue-veryVeryDark'
			>
				<Header darkMode={darkMode} darkModeToggle={darkModeToggle} />

				{/* Container */}
				<div
					className='px-3
					sm:px-24'
				>
					{!cardSelected ? (
						<>
							<Searchbar
								cards={cards}
								searchResult={searchResult}
								setSearchResult={setSearchResult}
								setFilteredCards={setFilteredCards}
							/>
							<Filter
								regionFilter={regionFilter}
								setRegionFilter={setRegionFilter}
							/>
							<Cards
								cards={filteredCards}
								formatNumber={formatNumber}
								cardSelection={handleCardSelection}
							/>
							{filteredCards.length === 0 && (
								<h1>Country not found</h1>
							)}
						</>
					) : (
						<CountryPage
							cards={cards}
							cardSelected={cardSelected}
							setCardSelected={setCardSelected}
							formatNumber={formatNumber}
							backButton={backButton}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
