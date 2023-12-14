import logo from './logo.svg'
import './App.css'
import { ToggleVision } from './components/ToggleVision'
import { Screen } from './components/Screen'
import { Button } from './components/Button'
import { useState } from 'react'
import math, { evaluate } from 'mathjs'
import dials from './dials'

function App() {
	const [screen, setScreen] = useState('') // Whats the screen displays
	const [isDarkMode, setIsDarkMode] = useState(true) //the state of light and night mode

	const screenDisplay = (value) => {
		setScreen((previousScreen) => previousScreen + value)
	}

	const handleCalculate = () => {
		try {
			setScreen(evaluate(screen).toString())
		} catch (error) {
			setScreen('Error')
		}
	}

	const handleClear = () => {
		setScreen('')
	}

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }

	return (
		<div className={`App ${!isDarkMode ? 'light-mode' : ' '}`}>
			<header>
				<span>CALC</span>
				<ToggleVision onclick ={toggleMode } currentMode = {isDarkMode}/ >
			</header>
			<Screen screenField={screen} />
			<section className="dials">
				{dials.map((value) => (
					<Button
						key={value}
						value={value}
						onClick={(val) => {
							if (val === '=') {
								handleCalculate()
							} else if (val === 'C') {
								handleClear()
							} else {
								screenDisplay(val)
							}
						}}
						style={{
							color:
								value === '*' || value === '-' || value === '+' || value === '/'
									? '#E67372'
									: value === 'C' || value === '%'
									? 'cyan'
									: !isDarkMode
									? 'black'
									: 'white',

							backgroundColor: value === '=' ? '#E67372' : '',
						}}
					/>
				))}
			</section>
		</div>
	)
}

export default App
