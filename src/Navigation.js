import React from 'react'
import { Link } from 'react-router-dom'
import * as Routes from './routes'

export default () => <nav>
  <ul>
    <li>
      <Link to={Routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={Routes.LOGIN}>Login</Link>
    </li>
  </ul>
</nav>