import React from "react";
import CardItem from "./CardItem";

const CardList = (props) => {
  const { users } = props;
  return (
    <div className="row">
      {users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
