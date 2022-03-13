import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { PATHS } from '../../constants'
import { useUserContext } from '../../context/user-context'

const ULComponent = styled.ul`
  display: fixed;
  padding: 24px;
`

const ListItem = styled.li`
  padding: 0 12px;
  & a {
    ${(props) => {
      return props.active ? 'font-weight : bold' : ''
    }}
  }
`
const pinkColor = css`
  color: pink;
`
const LinkAAA = styled(Link)`
  ${pinkColor}
`

const GNB = () => {
  const location = useLocation()
  const { user, setUser } = useUserContext()
  //const props = useUserContext()

  //console.log('location', location)
  // console.log('props', props)

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <ULComponent>
        <ListItem active={location.pathname === PATHS.HOME}>
          <Link to={PATHS.HOME}>홈</Link>
        </ListItem>
        <ListItem active={location.pathname === PATHS.BANNER_CREATE}>
          <Link to={PATHS.BANNER_CREATE}>베너생성</Link>
        </ListItem>
        {user == null ? (
          <>
            <ListItem active={location.pathname === PATHS.SIGN_UP}>
              <Link to={PATHS.SIGN_UP}>회원가입</Link>
            </ListItem>
            <ListItem active={location.pathname === PATHS.SIGN_IN}>
              <Link to={PATHS.SIGN_IN}>로그인</Link>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem active={location.pathname === PATHS.MY_INFO}>
              <Link to={PATHS.MY_INFO}>내정보</Link>
            </ListItem>
            <ListItem onClick={handleLogout}>로그아웃</ListItem>
          </>
        )}
      </ULComponent>
    </div>
  )
}

export default GNB
