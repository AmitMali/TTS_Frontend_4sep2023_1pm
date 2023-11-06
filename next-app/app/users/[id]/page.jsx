"use client";
import Usercard from "@/app/components/usercard/usercard";
import { useEffect, useState } from "react";
import axios from "axios";
const page = ({ params }) => {
  const id = params.id;
  const [user, setUser] = useState({});
  const getUser = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(result.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div>{user && <Usercard user={user} />}</div>
    </div>
  );
};

export default page;
