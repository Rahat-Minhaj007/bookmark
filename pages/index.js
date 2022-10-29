import React from "react";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div>
      <div className="bg-primary">
        <ul className="flex justify-end space-x-8 p-5 text-white font-[500] text-[14px]">
          <li>Home</li>
          <li>Bookmarks</li>
        </ul>
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
