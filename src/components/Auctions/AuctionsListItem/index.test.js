import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import { title, username, uuid } from 'casual-browserify'
import AuctionListItem from './index'

describe('AuctionListItem', () => {
  let wrapper
  let shallow
  let historyMock
  let auctionId
  beforeEach(() => {
    auctionId = uuid
    historyMock = { push: jest.fn() }
    shallow = createShallow({ dive: true })
    wrapper = shallow(
      <AuctionListItem.WrappedComponent name={title} owner={username} id={auctionId} history={historyMock} />
    )
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    historyMock = null
    auctionId = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('onClick push auctions details location to history', () => {
    const auctionListItemNode = wrapper.find('ListItem')
    auctionListItemNode.simulate('click')
    expect(historyMock.push).toHaveBeenCalledWith(`/auctions/${auctionId}`)
  })
})
