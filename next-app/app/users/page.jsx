"use client";
import { useEffect, useState } from "react";
import Usercard from "../components/usercard/usercard";
import Head from "next/head";
import Link from "next/link";
const page = () => {
  const [users, setUsers] = useState([]);

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
        {users &&
          users.map((user) => {
            return (
              <Link href={`users/${user.id}`}>
                <div className=" w-3/12  ">
                  <Usercard user={user} />;
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default page;
