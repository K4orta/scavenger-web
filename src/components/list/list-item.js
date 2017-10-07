import React from 'react'
import styled from 'react-emotion'

const ListStyle = styled('li')`
  padding: 3rem 0;

  &.found-it {
    opacity: .4;
  }

  text-align: center;
  & img {
    max-width: 100%;
  }

  & .Title {
    display: inline-block;
    margin: .5rem auto;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 1px solid #f0f;
    font-size: 24px;
    font-weight: bold;
  }

  &.found-it .Title {
    border: 1px solid #66c2a5;
    text-decoration: line-through;
  }
`

class ListItem extends React.Component {
  render() {
    const { id, title, found } = this.props
    let foundClass = ''
    if (found) {
      foundClass += ' found-it'
    }
    return (
      <ListStyle className={foundClass} >
        <div className="PhotoContainer">
          <img src={`/photos/item-${this.props.id}.jpg`} alt={this.props.title} />
        </div>
        <div className="Title">
          #{id} {title}
        </div>
      </ListStyle>
    )
  }
}

export default ListItem
