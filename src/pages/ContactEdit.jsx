import { Component, createRef } from "react"
import { connect } from "react-redux"
import { contactService } from "../services/contactService"
import { save } from "../store/actions/contactActions"
import Button from "@mui/material/Button"
import { TextField } from "@mui/material"
class _ContactEdit extends Component {
  state = {
    contact: null,
  }

  inputRef = createRef()

  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact()
    this.setState({ contact }, () => this.inputRef.current.focus())
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    this.props.save({ ...this.state.contact })
    this.props.history.push("/contact")
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value : target.value
    this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
  }
  render() {
    const { contact } = this.state
    if (!contact) return "Loading.."
    return (
      <div className="contact-edit">
        <h1>Add Contact</h1>
        <form onSubmit={this.onSaveContact}>
          <TextField
          label="Full Name"
            ref={this.inputRef}
            onChange={this.handleChange}
            value={contact.name}
            type="text"
            name="name"
            id="name"
          />
          <TextField
            label="eMail"
            onChange={this.handleChange}
            value={contact.email}
            type="email"
            name="email"
            id="email"
          />
          <TextField
            label="Phone"
            onChange={this.handleChange}
            value={contact.phone}
            type="tel"
            name="phone"
            id="phone"
          />

          <Button variant="contained">Save</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  }
}

const mapDispatchToProps = {
  save,
}

export const ContactEdit = connect(mapStateToProps, mapDispatchToProps)(_ContactEdit)
