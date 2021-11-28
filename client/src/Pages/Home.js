import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ContactList from "../Components/ContactList";
import { Segment, Button } from "semantic-ui-react";
import { toggleAdd } from "../JS/actions/edit";

const Home = () => {
  const dispatch = useDispatch();
  const style = {
    minHeight: "75vh",
  };

  return (
    <div style={style}>
      <Segment>
        <Link to="/add">
          <Button inverted color="teal" onClick={() => dispatch(toggleAdd())}>
            👨🏻‍💼 Add User
          </Button>
        </Link>
      </Segment>
      <ContactList />
    </div>
  );
};

export default Home;
