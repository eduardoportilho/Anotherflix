import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

const { shape, arrayOf, string } = React.PropTypes
const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} />
        <header>
          <h1>svideo</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          {
            this.props.shows
              .filter((show) => {
                return `${show.title} ${show.title}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
              })
              .map((show) => {
                return (
                  <ShowCard key={show.imdbID} {...show} />
                )
              })
          }
        </div>
      </div>
    )
  }
})

export default Search
