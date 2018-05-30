import { uuid, title, moment, username } from 'casual-browserify'
import gql from 'graphql-tag'

export const MockAuction = {
  auction: {
    __typename: 'Auction',
    id: uuid,
    name: title,
    createdAt: moment.toISOString(),
    owner: {
      __typename: 'User',
      username: username
    }
  }
}

export const GET_AUCTION_QUERY = gql`
  query auction($auctionId: ID!) {
    auction(id: $auctionId) {
      id
      name
      createdAt
      owner {
        username
      }
    }
  }
`