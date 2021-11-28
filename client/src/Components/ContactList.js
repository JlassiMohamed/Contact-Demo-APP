import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contact";
import ContactCard from "./ContactCard";
import "./ContactList.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactReducer.contactList);
  const load = useSelector((state) => state.contactReducer.load);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="list">
      {load ? (
        <h2>Loading...</h2>
      ) : (
        contactList.map((el) => <ContactCard key={el._id} contact={el} />)
      )}
    </div>
  );
};

export default ContactList;
