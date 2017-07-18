import React from "react"
import App from "./containers/app"
import { Route } from 'react-router';

console.log(App)
export default (store) => {
    return (
        <Route path="/" component={App}>
          <Route path="test" component={App} />
        </Route>
    )
}
