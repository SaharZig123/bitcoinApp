import React, { Component } from "react"
import { contactService } from "../services/contactService"
import { ContactList } from "../cmps/ContactList"
import { ContactDetails } from "../pages/ContactDetails"
import { Link } from "react-router-dom"
import { ContactsFilter } from "../cmps/ContactsFilter"
import { connect } from "react-redux"
import { loadContacts, removeContact, setFilterBy } from "../store/actions/contactActions"

export class _Contacts extends Component {
  state = {
    selectedContact: null,
  }
// Before using Redux
  componentDidMount() {
    // this.loadContacts()
    this.props.loadContacts()
  }

  // async loadContacts() {
  //     const contacts = await contactService.getContacts(this.state.filterBy)
  //     this.setState({ contacts })
  // }
  onChangeFilter = (filterBy) => {
    // this.setState({ filterBy }, this.loadContacts)
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  removeContact = async (contactId) => {
    this.props.removeContact(contactId)
  }

  render() {
    const { contacts } = this.props
    const { selectedContact } = this.state
    if (!contacts) return "Loading"
    if (selectedContact) return <ContactDetails contact={selectedContact} />
    return (
      <div className="contacts">
        <h1>Contacts</h1>
        <ContactsFilter onChangeFilter={this.onChangeFilter} />
        <Link to="contact/edit">Add New</Link>
        <ContactList removeContact={this.removeContact} contacts={contacts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const Contacts = connect(mapStateToProps, mapDispatchToProps)(_Contacts)
