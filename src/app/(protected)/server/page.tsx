import UserInfo from "@/components/UserInfo";
import { currentUser } from "@/lib/auth";
import React from "react";

const Server = async () => {
  const user = await currentUser();
  return <UserInfo label="💻 Server component" user={user} />;
};

export default Server;
