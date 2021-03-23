import React, { useState, useEffect } from "react";

export default function Doller(props) {
  const [user, setUser] = useState(null);

  async function fetchUserData(id) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>{user.firstName}</summary>
      <strong>{user.City}</strong>  lives in
      <br />
     {user.birthDate}
    </details>
  )};
