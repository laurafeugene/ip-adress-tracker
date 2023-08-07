import "./searchform.css";
import { useState } from "react";

function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length < 11) {
      setInputError("Please enter a valid IP address or domain");
    } else {
      setInputError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length >= 11) {
      // Submit form if input is valid
        setInputError(null);
    } else {
      setInputError("Input must be at least 11 characters");
    }
    console.log(`${inputValue}`);
  };
  return (
    <section className="background">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="searchform"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 -960 960 960"
            width="16"
            fill="white"
          >
            <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
          </svg>
        </button>
      {inputError && <p className="error">{inputError}</p>}
      </form>
    </section>
  );
}

export default SearchForm;
