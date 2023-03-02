"use client";
import React from "react";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* new chat */}
          <NewChat />
          <div>{/* module selection */}</div>

          {/* map through the chart */}
        </div>
      </div>

      {session && (
        <img
          src={session.user?.image!}
          alt="Profile Pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto hover:opacity-50"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
};
export default NavBar;
