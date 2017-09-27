import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {

  renderLogin() {
    switch (this.props.auth) {
       case null:
          return
       case false:
          return(
            <li><a href="/auth/google">Login with google</a></li>
          )
       default:
          return(
            <li><a href="/api/logout">Logout</a></li>
          )
    }
  }

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
          >
            eMaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderLogin()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
