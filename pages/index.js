import Link from "next/link";
import React, { useEffect } from "react";
import Main from "../components/main/Main";

const Home = () => {
  useEffect(() => {
    window.localStorage.setItem("bookmarks", JSON.stringify([]));
  }, []);
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
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
