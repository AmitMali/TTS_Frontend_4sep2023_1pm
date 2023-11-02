"use client";
import { useEffect, useState } from "react";
import Usercard from "../components/usercard/usercard";
import Head from "next/head";
const page = () => {
  const [users, setUsers] = useState();

  async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await resp.json();
    setUsers(result);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Users Page</title>
        <meta property="description" content="Users description" />
      </Head>
      <div className="flex flex-wrap flex-row gap-2 ">
        <div className=" w-3/12 ">
          {console.log(users)}
          <Usercard />
        </div>
      </div>
    </>
  );
};

export default page;
