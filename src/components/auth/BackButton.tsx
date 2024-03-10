import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BackButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
