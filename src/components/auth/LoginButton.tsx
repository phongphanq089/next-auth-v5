"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
