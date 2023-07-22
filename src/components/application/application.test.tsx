import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    /**
     * Always try to use "getByRole" first
     * it takes an options object with name and level options
     * where name is the textContent
     * and level can be level of headings e.g. h1 => 1
     */

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    /**
     * getByText
     * will search for all elements that have a text node with textContent matching the given text
     * Typically, would be used to find paragraph, div, or span elements
     * it also takes a selector option to fine tune the search
     */

    const paraGraphElement = screen.getByText("All fields are mandatory", {
      selector: "p",
    });
    expect(paraGraphElement).toBeInTheDocument();

    /**
     * getByTitle
     * matches the element with title attribute as given
     */

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    /**
     * getByAltText
     */

    const imageElement = screen.getByAltText("A person with a laptop");
    expect(imageElement).toBeInTheDocument();

    /**
     * getByTestId
     */

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    /**
     * getByRole
     */

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();
    /**
     * getByLabelText query
     * will find the label and input its associated
     * will take a selector option to fine tune the search
     */

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    /**
     * getByPlaceholderText
     */

    const nameElement3 = screen.getByPlaceholderText("Full Name");
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    /**
     * getByDisplayValue
     * will get an input textarea or select element that has the matching value
     */

    const nameElement4 = screen.getByDisplayValue("Parus");
    expect(nameElement4).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    /**
     * getByLabelText will even find the input element inside the label element
     */

    const termsElement2 = screen.getByLabelText(
      "I agree to terms and conditions",
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });
});
