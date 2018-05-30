import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Bracket from '../Bracket'

class Tournament extends Component {
  render() {
    const { brackets } = this.props
    return (
      <Grid container direction="row" justify="space-between">
        {brackets.map(bracket => (
          <Grid key={bracket.id} item md={3} sm={6} xs={12}>
            <Bracket name={bracket.name} teams={bracket.teams} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

Tournament.propTypes = {
  brackets: PropTypes.array.isRequired
}

export default Tournament
