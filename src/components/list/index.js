import React from 'react'
import styled from 'react-emotion'

const ListStyle = styled('div')`
  background: #777;
  overflow: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(100%, 0, 0);
  transition: transform .3s ease-in;

  & li {
    height: 10rem;
  }

  &.is-open {
    transform: translate3d(0, 0, 0);
    transition: transform .3s ease-out;
  }
`

class ItemList extends React.Component {
  render() {

    return (
      <ListStyle className={this.props.open ? 'is-open' : ''}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </ListStyle>
    )
  }
}

export default ItemList
