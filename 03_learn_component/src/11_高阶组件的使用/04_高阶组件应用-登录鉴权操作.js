import React, { PureComponent } from 'react'

function withAuth(Wrapped) {
    return props => {
        const { isLogin } = props
        if (isLogin) {
            return <Wrapped />
        } else {
            return <LoginPage />
        }
    }
}

class LoginPage extends PureComponent {
    render() {
        return <h2>LoginPage</h2>
    }
}

class CartPage extends PureComponent {
    render() {
        return <h2>Cart</h2>
    }
}
const AuthCart = withAuth(CartPage)
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <AuthCart isLogin={false}></AuthCart>
                </div>
            </div>
        )
    }
}
