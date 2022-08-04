import React, { useState } from "react";

const SearchBar = ({ onInputSubmit }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onInputSubmit(input);
  };

  return (
    <>
      <div className="ui segment">
        <form className="ui form" onSubmit={onSubmit}>
          <div className=" field">
            <label>video search</label>
            <input
              type="text"
              placeholder="Search a very wide input..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
