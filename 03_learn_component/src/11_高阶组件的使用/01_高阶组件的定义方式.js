import React, { PureComponent } from 'react'

class App extends PureComponent {
    render() {
        return (
            <div>
                <div>App {this.props.name}</div>
            </div>
        )
    }
}

App.displayName = 'Tao'

function enhanceComponent(Wrapped) {
    class NewComponent extends PureComponent {
        render() {
            return <Wrapped {...this.props} />
        }
    }
    NewComponent.displayName = 'a'
    return NewComponent
}

const Enchance = enhanceComponent(App)

export default Enchance
