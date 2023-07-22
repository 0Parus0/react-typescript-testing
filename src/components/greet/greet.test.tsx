import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 *     Test Driven Development
 * Greet should render the text hello and if a name is passed as prop into component
 * it should render hello followed by name
 *  */

/**
 * test.only will only run that test
 * test.skip will skip that test
 * describe is a global function which is used to combine/group the test together.
 * describe takes to parameters `describe("name of test", () => { "tests to group together"})
 * describe.skip() will skip all the test in that describe call
 * describe.only() will only run the test in that describe call
 * describe blocks can be nest in one another
 * Multiple describe blocks can be used in one file
 * Test Suite means the file
 */

/**
 *        Jest setting
 * Jest will start in CRA in watch mode
 * Pressing "w" will bring up all the options
 * "a" is to run all test
 * "o" is to run all test in only files that have been changed
 * "p" is to run test in the particular file, have to give a regex
 * "t" is to run test with that particular name
 * "c" is to clear the filter
 * "f" to run only failed test
 *
 */

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with the name", () => {
    render(<Greet name="Parus" />);
    const textElement = screen.getByText("Hello Parus");
    expect(textElement).toBeInTheDocument();
  });
});
