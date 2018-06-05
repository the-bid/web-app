import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AuthenticateButton from '../AuthenticateButton'
import NavMenu from './NavMenu'

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  headerLink: {
    flex: 1,
    color: 'inherit',
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  }
}

class Header extends Component {
  state = {
    isMenuOpen: false
  }
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }
  render() {
    const { classes, location, isAuthenticated, login, logout } = this.props
    const { isMenuOpen } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon onClick={this.toggleMenu} />
            </IconButton>
            <NavMenu open={isMenuOpen} toggleMenu={this.toggleMenu} isLoggedIn={isAuthenticated()} />

            <Link to="/" replace={location.pathname === '/'} className={classes.headerLink}>
              <Typography variant="title" color="inherit">
                The Bid
              </Typography>
            </Link>

            {isAuthenticated() && (
              <IconButton>
                <AccountCircle color="inherit" />
              </IconButton>
            )}

            <AuthenticateButton login={login} logout={logout} isAuthenticated={isAuthenticated()} />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.func.isRequired
}

export default withStyles(styles)(withRouter(Header))
