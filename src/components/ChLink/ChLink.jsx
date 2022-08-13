import React from "react";
import Link from "next/link";

export default function ChLink({ link, name }) {
  return (
    <li className="mb-2">
      <Link href={link}>
        <a
          className="hover:text-blue-700 underline decoration-1 underline-offset-2"
          title="test"
        >
          {name}
        </a>
      </Link>
    </li>
  );
}
