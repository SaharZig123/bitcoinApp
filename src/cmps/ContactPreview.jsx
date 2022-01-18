import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ImageIcon,
  ListItemText,
  Divider,
  List,
  IconButton,
} from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
export function ContactPreview({ contact, removeContact }) {
  return (
    <div>
      <List>
        <Link to={`/contact/${contact._id}`}>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} />
              <IconButton edge="end" aria-label="delete" onClick={() => removeContact(contact._id)}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            <IconButton
              to={{
                pathname: "/contact/edit/",
                query: { name: contact._id },
              }}
              edge="end"
              aria-label="edit"
            >
              <EditOutlinedIcon />
            </IconButton>
          </ListItem>
        </Link>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  )
}
