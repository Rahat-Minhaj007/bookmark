import Link from "next/link";
import React from "react";

const Bookmarks = () => {
  return (
    <div>
      <div className="bg-primary">
        <ul className="flex justify-end space-x-8 p-5 text-white font-[500] text-[14px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </div>
      <h1>Welcome to Bookmarks</h1>
    </div>
  );
};

export default Bookmarks;
