import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, removeContact }) {
    if (!contacts) return 'Loading'
    return (
        <div className='contacts-list'>
            {contacts.map((contact, index) =>
                <ContactPreview removeContact={removeContact} key={index} contact={contact} />
            )}
        </div>
    )
}
