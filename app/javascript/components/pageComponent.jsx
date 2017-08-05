import React, {Component} from 'React'

import SiteHeader from './Layouts/Header'
import SiteFooter from './Layouts/Footer'

function pageComponent(WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)
    }

    render () {
      return (
        <div>
          <SiteHeader />
          <WrappedComponent {...this.props} />
          <SiteFooter />
        </div>
      )
    }
  }
}

export default pageComponent