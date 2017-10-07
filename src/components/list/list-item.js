import React from 'react'
import styled from 'react-emotion'

const ListStyle = styled('li')`
  padding: 3rem 0;
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
`

class ListItem extends React.Component {
  render() {
    const { id, title } = this.props
    return (
      <ListStyle>
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
