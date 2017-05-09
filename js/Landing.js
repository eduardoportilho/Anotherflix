import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'

const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string
  },

  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input value={this.props.searchTerm} type='text' placeholder='Search' />
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})

// pull state from redux and pass as props to component
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
