import React from "react";
import PropTypes from "prop-types"
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "./lib/time";





const Home = (props) => {

	
	return (
	<>
	
	<SimpleCounter 
	hundredThousandsDigit = {calculateSeconds(props.counter, 100000)}
	tenThousandsDigit = {calculateSeconds(props.counter, 10000)}
	thousandsDigit = {calculateSeconds(props.counter, 1000)}
	hundredsDigit = {calculateSeconds(props.counter, 100)}
	tensDigit = {calculateSeconds(props.counter, 10)}
	onesDigit = {calculateSeconds(props.counter, 1)}
	/>

	</>
	);
}
SimpleCounter.propTypes = {
	hundredThousandsDigit: PropTypes.number,
	tenThousandsDigit: PropTypes.number,
	thousandsDigit: PropTypes.number,
	hundredThousandsDigit: PropTypes.number,
	tensDigit: PropTypes.number,
	onesDigit: PropTypes.number,
}
export default Home;






