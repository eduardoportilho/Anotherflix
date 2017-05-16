import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'

const { shape, arrayOf, string } = React.PropTypes
const Search = React.createClass({
  propTypes: {
    searchTerm: string,
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {
            this.props.shows
              .filter((show) => {
                return `${show.title} ${show.title}`
                  .toUpperCase()
                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
