import React from 'react'
import styled from 'react-emotion'

const ListStyle = styled('li')`

`

class ListItem extends React.Component {
  render() {
    return (
      <ListStyle>
        {this.props.title}
      </ListStyle>
    )
  }
}

export default ListItem
