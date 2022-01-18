import React, { Component } from "react";
import { TransferFund } from "../cmps/TransferFund";
import { contactService } from "../services/contactService";
import { userService } from "../services/userService";

export class ContactDetails extends Component {
  state = {
    contact: null,
  };

  componentDidMount() {
    this.loadContact();
  }

  async loadContact() {
    const contact = await contactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ contact });
  }

  addMove(amount, contact) {
    userService.addMove(amount, contact);
  }

  goBack=()=>{
    this.props.history.push('/contact')
  }

  render() {
    const { contact } = this.state;
    if (!contact) return "Loading..";
    return (
      <div>
        <img src={`https://robohash.org/${contact.name}/?set=set4`} alt="" />
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <TransferFund addMove={this.addMove} contact={contact} />
        <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}
