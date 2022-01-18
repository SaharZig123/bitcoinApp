import React, { Component } from "react"
import { connect } from "react-redux"
import { MovesList } from "../cmps/MovesList"
import { cryptoService } from "../services/cryptoService"
import { userService } from "../services/userService"
import { loadContacts } from "../store/actions/contactActions"
import { Signup } from "./Signup"

export class MisterBitcoinApp extends Component {
  state = {
    user: null,
    bitcoinRate: null,
  }
  componentDidMount() {
    this.loadUser()
  }

  async loadUser() {
    const user = userService.getUser()
    if (!user) this.props.history.push("/signup")
    this.setState({ user }, () => this.getBitcoinRate())
  }

  async getBitcoinRate() {
    const bitcoinRate = await cryptoService.getBitcoinRate(this.state.user)
    this.setState({ bitcoinRate })
  }

  render() {
    const { user, bitcoinRate } = this.state
    if (!user) return "loading.."

    return (
      <div className="user-details-container">
        <h1>Hello {user.username}</h1>
        <img src={`https://robohash.org/${user.username}/?set=set4`} alt="" srcset="" />
        <p>Coins: {user.coins}</p>
        <p>BTC: {bitcoinRate}</p>
        <h2>Last 3 Transfers:</h2>
        <MovesList moves={user.moves} />
      </div>
    )
  }
}


