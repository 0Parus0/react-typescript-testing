import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="A person with a laptop" />
      <div data-testid="custom-element">Custom HTML element</div>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value="Parus"
              onChange={() => {}}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" cols={30} rows={10} />
          </div>
          <div>
            <label htmlFor="job-location">Job location</label>
            <select id="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" /> I agree to terms and
              conditions
            </label>
          </div>
          <button disabled type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Application;
