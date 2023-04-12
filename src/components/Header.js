import Button from "./Button"
import PropTypes from 'prop-types'

const Header = ({title, onAdd, showForm}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='navy' text={showForm?'Done':'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}
export default Header