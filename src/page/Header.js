import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { selectUser } from '../selectors/userSelector'
import { userLogout } from '../actions/userActions'
import routes from '../pathes'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${({theme}) => theme.colors.secondary};
`

const Navbar = styled.nav`
  text-align: center;
  line-height: 70px;
`

const StyledLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  font-family: Roboto, Consolas;
  font-size: 1.2em;
  color: ${({theme, to, route, location}) => location.pathname === (to || route) ? theme.colors.salmon : theme.colors.warning};
    &:hover {
      color: ${({theme}) => theme.hoverColors.white};
    }
`

const Header = ({ history, user, userLogout, location }) => {
  const handleLogout = () => {
    userLogout()
    history.push(routes.HOME)
  }

  const handleLoggin = () => {

  }

  return (
    <HeaderWrapper>
      <Navbar>
        <StyledLink to={routes.HOME} location={location} >HOME</StyledLink>
        {
          user.authorized
            ? <StyledLink onClick={handleLogout} location={location} children='LOGOUT' />
            : <StyledLink to={routes.LOGIN} location={location} children='LOGIN' />
        }
      </Navbar>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: selectUser(state)
})

export default compose(
  withRouter,
  connect(mapStateToProps, { userLogout })
)(Header)