import React from "react";
import logo from "../logo.svg";
import PostList from "./PostList";

function App() {
  return (
    <div>
      <div className="github-header flex justify-end items-center">
        <p className="font-mono">Check the source code! </p>
        <a
          href="https://github.com/nikhilm19/redux-thunk-starter"
          target="_blank"
        >
          <i className="fab fa-github-square  fa-3x"></i>
        </a>
      </div>
      <div className="m-auto mt-8 flex flex-row justify-center h-9/12">
        <h1 className="text-3xl text-blue-700  mb-10">
          React Redux Thunk Starter
        </h1>
      </div>
      <PostList />
    </div>
  );
}

export default App;
