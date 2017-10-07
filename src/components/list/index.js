import React from 'react'
import styled from 'react-emotion'
import { inject, observer } from 'mobx-react'
import ListItem from './list-item'

const ListStyle = styled('div')`
  background: white;
  overflow: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(100%, 0, 0);
  transition: transform .3s ease-in;

  &.is-open {
    transform: translate3d(0, 0, 0);
    transition: transform .3s ease-out;
  }

  & ul {
    list-style: none;
    padding: 1rem;
  }
`

class ItemList extends React.Component {
  render() {
    const items = this.props.itemStore.items.map(i =>
      <ListItem key={i.id} {...i} />
    )
    return (
      <ListStyle className={this.props.open ? 'is-open' : ''}>
        <ul>
          {items}
        </ul>
      </ListStyle>
    )
  }
}

export default inject('itemStore')(observer(ItemList))
