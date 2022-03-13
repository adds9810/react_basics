import { Route } from 'react-router-dom'

import { useUserContext } from '../../contexts/user-context'
import { PATHS } from '../../constants'

const PrivateRoute = (children) => {
  const { user } = useUserContext()
  if (user == null) {
    return <Navigate to={PATH.SIGN_IN} />
  }
  return children
}

export default PrivateRoute
