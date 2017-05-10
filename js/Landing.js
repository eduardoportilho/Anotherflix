import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
import '../public/normalize.css'
import '../public/style.css'

const { string, func } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input value={this.props.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
