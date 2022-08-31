import PropTypes from 'prop-types'
import Button from './Button'


//const Header = (props) => {
//<h1>{props.title}</h1>

const onClick = (e) => {
  console.log(e);
}

const Header = ({ title, requiredPropDemo }) => {
  return (
    <header className='header'>
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title} {requiredPropDemo}</h1>
      <Button text='Add' onClick={onClick} />
    </header>
  )
}

// this will be overridden if specified
Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string,
  requiredPropDemo: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = { 
//   color: 'red', 
//   backgroundColor : 'blue' 
// }

export default Header