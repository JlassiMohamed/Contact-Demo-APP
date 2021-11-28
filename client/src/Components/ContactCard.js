import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteContact, getContact } from "../JS/actions/contact";
import { toggleEdit } from "../JS/actions/edit";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.contactReducer.message);
  const handleDelete = () => {
    dispatch(deleteContact(contact._id));
    console.log(message); //message="" in place of real message
  };
  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(getContact(contact._id));
  };
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
        />
        <Card.Header>{contact.userName}</Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Meta>{contact.phone}</Card.Meta>
        <Card.Description>
          Welcome to my profile in the <strong>Contact Demo App</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/edit/${contact._id}`}>
            <Button inverted color="green" onClick={handleEdit}>
              Edit
            </Button>
          </Link>
          <Button inverted color="red" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ContactCard;
