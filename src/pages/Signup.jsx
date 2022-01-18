import { Component } from 'react'
import { userService } from '../services/userService'


export class Signup extends Component {
    state = {
        username: ''
    }
    componentDidMount() {
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value })
    }

    signup = () => {
        const { username } = this.state
        userService.signup(username)
        this.props.history.push('/')
    }

    render() {
        const { username } = this.state
        return (
            <div>
                <h1>Login/Signup</h1>
                <label htmlFor="username">UserName:</label>
                <input onChange={this.handleChange} value={username} type="text" name="username" id="username" />
                <button onClick={() => this.signup()}>Signup</button>
            </div>
        )
    }
}
