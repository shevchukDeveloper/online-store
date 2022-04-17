import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { authRouters, publicRouters } from '../routes'
import { SHOP_ROUTE } from '../utils/const'
const GeneralRouter = () => {
    const { user } = useContext(Context)
    console.log(user);
  return (
      <Switch>
          {user.isAuth && authRouters.map(({ path, Component }) => 
              <Route key={path} path={path} component={Component}  exact/>
          )}
           {publicRouters.map(({ path, Component }) => 
              <Route key={path} path={path} component={Component}  exact/>
          )}
          <Redirect to={SHOP_ROUTE} />
    </Switch>
  )
}

export default GeneralRouter