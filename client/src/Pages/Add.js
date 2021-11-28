import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editContact, postContact } from "../JS/actions/contact";
import { Button, Checkbox, Form, Segment } from "semantic-ui-react";

const Add = () => {
  const edit = useSelector((state) => state.editReducer.edit);
  const contactToEdit = useSelector((state) => state.contactReducer.contact);

  const [contact, setContact] = useState({});
  useEffect(() => {
    edit
      ? setContact(contactToEdit)
      : setContact({ userName: "", email: "", phone: "" });
  }, [edit, contactToEdit]);

  const dispatch = useDispatch();
  const handleData = () => {
    edit
      ? dispatch(editContact(contactToEdit._id, contact))
      : dispatch(postContact(contact));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  console.log(contactToEdit);
  return (
    <div style={{ minHeight: "75vh", width: "95%", margin: "0 auto" }}>
      <Segment>
        <Link to="/">
          <Button inverted color="teal">
            👨‍👨‍👧 All Contacts
          </Button>
        </Link>
      </Segment>
      <Form style={{}}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="User Name"
            name="userName"
            value={contact.userName} //necessary only in case of edit
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input
            placeholder="E-mail address"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="Phone number"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Link to={"/"}>
          <Button inverted color="green" type="submit" onClick={handleData}>
            {edit ? "edit" : "save"}
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Add;
