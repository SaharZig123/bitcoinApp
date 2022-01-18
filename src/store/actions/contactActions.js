import { contactService } from "../../services/contactService"

export function loadContacts() {
  return async (dispatch,getState) => {
    const {filterBy}=getState()
    try {
      const contacts = await contactService.getContacts(filterBy)
      dispatch({ type: "SET_CONTACTS", contacts })
    } catch (err) {
      console.log(err)
    }
  }
}

export function removeContact(contactId) {
  return async (dispatch) => {
    try {
      await contactService.deleteContact(contactId)
      dispatch({ type: "REMOVE_CONTACT", contactId })
    } catch (err) {
      console.log(err)
    }
  }
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_FILTER_BY", filterBy })
    } catch (err) {
      console.log(err)
    }
  }
}

export function save(contact) {
  return async (dispatch) => {
    try {
      await contactService.saveContact(contact)
      dispatch({ type: "UPDATE_CONTACT", contact})
    } catch (err) {
      console.log(err)
    }
  }
}
