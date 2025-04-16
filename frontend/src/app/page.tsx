"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`${apiUrl}users/`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched Users:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, [apiUrl]);

  console.log(users);

  return (
    <div>
      <h1>Userssgg</h1>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
};

export default Page;
