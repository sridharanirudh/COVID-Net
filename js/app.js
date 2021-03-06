import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import HomeComponent from './homecomponent'
import XRayComponent from './xraycomponent'

class App extends React.Component {
	render() {
		return <div>
			<Switch>
					<Route exact path='/' component={HomeComponent} />
					<Route exact path='/xray' component={XRayComponent} />
				</Switch>
		</div>
	}
}

export default withRouter(App)
