# Testing

As a developer, our primary goal is to build software that works
To ensure our software works, we test the application
We check if our software works as expected

## Manual Testing

An individual will open website, interact with the website and ensure everything works as intended
if a new feature is released, you repeat the same steps
You may have to test not only the new feature but also the existing features

- ### Drawbacks

1. Time consuming
2. Complex repetitive tasks has a risk of human error
3. You may not get a chance to test all the features you should

## Automated Testing

Automated test are programs that automate the task of testing your software
Write code to test the software code
Additional effort required when you develop a feature

- ### Advantages

1. Not time consuming
2. Reliable, consistent and not error prone
3. Easy to identify and fix features that break tests
4. Gives confidence when shipping software

# Jest vs RTL

## Jest

Jest is a javascript testing framework
Jest is a test runner that finds tests, runs the tests, determines wether the tests passed or failed and reports it back in human readable manner

## RTL

Javascript testing utility that provides a virtual DOM for testing React components
React Testing Library provides a virtual DOM which we can use to interact with and verify the behavior of a React component
Testing Library is infect a family of packages which helps test UI components
The core library is called DOM Testing Library and RTL is simply a wrapper around this core library to test React application in an easier way

# Types of Test

## Unit test

Focus is on testing the individual building blocks of an application such as class or a function or a component
Each unit or building block is tested in isolation, independent of other units
Dependencies are mocked
Run in a short amount of time and make it very easy to pinpoint failures
Relatively easier to write and maintain

## Integration test

Focus is on testing a combination of units and ensuring they work together
take longer than unit tests

## E2E test

Focus is on testing the entire application flow and ensuring it works as designed from start to finish
Involves in a real UI, a real backend database, real services etc
Take the longest as they cover the most amount of code
have a cost implication as you interact with real APIs that may charge based on the number of requests

# RTL Philosophy

"The more your test resemble the way your software is used, the more confidence they can give you."

# Test Driven Development (TDD)

Test driven development is a software development process where tests are written before writing the software code.
Once the tests have been written, you then write the code to ensure the tests pass

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass
   Also called red-green testing as all tests go from red failed state to a green passed state

## Filename Conventions

- Files with .test.js or .test.tsx suffix
- Files with .spec.js or .spec.tsx suffix
- Files with .js or .tsx suffix in **tests** folders.

Recommendation is to always put your test next to the code they are testing so relative imports are shorter

## Code Coverage

A metric that can help you understand how much of your software code is tested

- Statement coverage: how many of the statements in the software code have been executed.
- Branches coverage: how many of the branches of the control structures(if statements for instance) have executed
- Function coverage: how many of the functions defined have been called
- Line coverage: how many of lines of source code have been tested.

## Assertions

When writing tests, we often need to check that values meet certain conditions
Assertions decide if a test passes or fails

### expect

expect(value)
The argument should be the value that your code produces
Typically, you will use expect along with a "matcher" function to assert something about a value
A matcher can optionally accept an argument which is the correct expected value

# Jest setting

- Jest will start in CRA in watch mode
- Pressing "w" will bring up all the options
- "a" is to run all test
- "o" is to run all test in only files that have been changed
- "p" is to run test in the particular file, have to give a regex
- "t" is to run test with that particular name
- "c" is to clear the filter
- "f" to run only failed test

### Matcher functions for Javascript

For more on common matchers see jest docs using matchers

- a value is exactly equal => expect(value).toBe(value)
- Numbers matcher toBe(), toEqual(), toBeClose()
- Strings matcher expect(value).toMatch(), .not.toMatch()
- Arrays and iterables => expect(array).toContain()
- Exceptions => expect(() => someFunction()).toThrow(error)

### Matcher functions for UI

GitHub-testing-library/jest-dom

- toBeDisabled
- toBeEnabled
- toBeInTheDocument
- toContainElement
- So many more

# What to test ?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

## What not to test

- Implementation details
- Third party code {libraries}
- Code that is not important from user point of view

## test and describe

- test.only will only run that test
- test.skip will skip that test
- describe is a global function which is used to combine/group the test together.
- describe takes to parameters `describe("name of test", () => { "tests to group together"})
- describe.skip() will skip all the test in that describe call
- describe.only() will only run the test in that describe call
- describe blocks can be nest in one another
- Multiple describe blocks can be used in one file
- Test Suite means the file

# RTL Queries

Every test we write generally involves the following basic steps

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test
   To render the component, we use the render method from RTL
   For assertions, we use expect passing in a value and combine it with a matcher function from jest or jest-dom

## Queries

Queries are the methods that Testing Library provides to find elements on the page

To find a single element on the page, we have

- getBy..
- queryBy..
- findBy..

To find multiple elements on the page, we have

- getAllBy..
- queryAllBy..
- findAllBy..

The suffix can be one of Role, LabelText, Text, DisplayValue, AltText, Title and finally TestId.

**_ getBy and getAllBy class of queries to assert if elements are present in the DOM _**
**_ queryBy and queryAllBy class of queries to assert if element are not present in the DOM _**
**_ findBy and findAllBy class of queries to assert if element is going to be appear after some times _**

## Appearance and Disappearance

What if elements are not present in the DOM to begin with but make their way into the DOM after some time?
For example, data that is fetched from a server will be rendered only after a few milliseconds

### getBy... queries

getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found
The suffix can one of Role, LabelText, PlaceHolderText, Text, DisplayValue,
AltText, Title and TestId

### getByRole

getByRole queries for elements with given role
Role refers to the ARIA(Accessibility Rich Internet Application) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them
By default, many semantic elements in HTML have a role
Button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkboxes have checkbox role, radio buttons have a radio role and so on
If you are working with elements that don't have a default role or if you want to specify a different role, the role attribute can be used to add the desired role
To use an anchor element as a button in the navbar, you can add role='button'

**_ To find out roles of all the elements visit _**
testing-library/docs/queries/ByRole/a table of HTML elements with their default roles.

### getByRole Options

- name
  The accessible name is for simple cases equal to
  1. The label of a form element
  2. The text content of a button
  3. The value of the aria-label attribute

### getByLabelText

getByLabelText will search for the label that matches the given text, then find the element associated with that label

### getByPlaceholderText

getByPlaceholderText will search for all elements with a placeholder attribute and find one that matches the given text

### getByText

getByText will search for all elements that have a text node with textContent matching the given text
Typically, you'd use this to find paragraph, div or span elements

### getByDisplayValue

getByDisplayValue returns the input, textarea, or select element that has the matching display value.

### getByAltText

getByAltText will return element that has the given alt text
This method only supports elements which accept an alt attribute like <img>,<input>, <textarea> or custom HTML elements

### getByTitle

getByTitle returns the element that has the matching title attribute

### getByTestId

getByTestId returns the element that has the matching data-testid attribute

## Priority Order for Queries

"Your test should resemble how users interact with your code(component, page, etc.) as as possible"

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getTestId

# RTL getAllBy Queries

Find multiple elements in the DOM
getAllBy returns an array of all matching nodes for a query, and throws an error if no elements match

1. getAllByRole
2. getAllByLabelText
3. getAllByPlaceholderText
4. getAllByText
5. getAllByDisplayValue
6. getAllByAltText
7. getAllByTitle
8. getAllByTestId

## TextMatch

TextMatch represents a type which can be either a

- string
  `<div>Hello World</div>`
  screen.getByText('Hello World) // full string match
  screen.getByText('Hello World, {exact: false}) // substring
  screen.getByText('hello World, {exact: false}) // ignore case

- regex
  `<div>Hello World</div>`
  screen.getByText(/World/) // substring match
  screen.getByText(/world/i) // substring match, ignore case
  screen.getByText(/^hello world$/i) // full string match, ignore case

- custom - function
  (content?: string, element?: Element | null) => boolean

`<div>Hello World</div>`
screen.getByText((content) => content.startsWith('Hello))

# queryBy and queryAllBy

## queryBy

- Returns the matching node for a query, and return null if no elements match
- Useful for asserting an element that is not present
- Throws an error if more than one match is found

## queryAllBy

- Returns an array of all matching nodes for a query, and return an empty array if no elements match

### findBy

- Returns a Promise which resolves when an element is found which matches the given query
- The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

### findAllBy

- Returns a promise which resolves to an array of elements when any elements are found which match the given query
- The promise is rejected if no elements are found after a default timeout of 1000ms

# Chrome Extension => Testing Playground

## user-event

A companion library for Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser

### fireEvent vs user-event

fireEvent is a method from RTL which is used to dispatch DOM events
user-event simulates full interactions, which may fire multiple events and do additional checks along the way
For example, we can dispatch the change event on an input field using fireEvent
When a user types into a text box, the element has to be focused, and then keyboard and input events are fired and the selection and value on the element are manipulated as they type
user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and intractability checks along the way and manipulates the DOM just like a suer interaction in the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or type in a disabled text box

## Pointer Interactions

### Convenience APIs

- click()
- dblClick()
- tripleClick()
- hover()
- unhover()

### Pointer APIs

- pointer({keys: '[MouseLeft]'})
- pointer({keys: '[MouseLeft][Mouseright]'})
- pointer({'[MouseLeft][Mouseright]'})
- pointer('[MouseLeft>]')
- pointer('[/MouseLeft]')

## Keyboard Interactions

### Utility API

- type()
- clear()
- selectOptions()
- deselectOptions()
- upload()

### Convenience API

- tab()

### Clipboard APIs

- copy()
- cut()
- paste()

### Keyboard API

keyboard('foo') // translate to: f,o,o
keyboard('{Shift>}A{/Shift}')// translate to: Shift(down),A,Shift(up)
