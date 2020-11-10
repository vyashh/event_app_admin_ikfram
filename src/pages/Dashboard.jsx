import React, { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

  async function handleSubmit() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError(error.message);
    }
  }

  function print() {
    console.log("E");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button type="submit" className="w-100" onClick={handleSubmit}>
        Logout
      </Button>
    </div>
  );
}
