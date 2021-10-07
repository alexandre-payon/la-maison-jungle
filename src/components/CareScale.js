import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

		function handleCareScale() {
			if (careType === 'light') {
				careType = 'de lumière'
			} else {
				careType = 'd\'arrosage'
			}

			if (scaleValue === 1) {
				scaleValue = 'peu'
			} else if (scaleValue === 2) {
				scaleValue = 'modérement'
			} else {
				scaleValue = 'beaucoup'
			}
		   alert(`Cette plante requiert ${scaleValue} ${careType}`)
		}

	return (
		<div onClick={() => handleCareScale()}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}



export default CareScale
