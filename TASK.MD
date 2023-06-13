# Task

Write a React component that truncates single-line text to fit a given container width.

## Requirements

The width of the container limits the maximum text width. Text that doesn't fit is truncated to an ellipsis (...), but the last N characters should always be shown.
Example: feature/create-new-text-ellipsis-component-TC2018.02 → feature/create...18.02
With a narrow container width and N=5.

The component must support the following properties:
- children (required) – original text.
- tailLength (required) – the length of the non-truncating text. In other words, the last N characters of the line that should always be shown.
- title (optional) – text that appears as a hint on the hover of the original text (children).
- className (optional) – CSS class of the component's container.

Overall, the component should include truncation of the string to match the size of the container, search for the string with a built-in browser search (ctrl+F / cmd+F), and a convenient string copying – no line breaks or any additional characters should appear inside the string.

## Performance requirements

This component should be high-performing, as it is intended to be used in cells of large tables with large amount of data.
When changing the width of a table that contains 2000 rows with two columns of original text each, re-drawing should take no more than 500 milliseconds.

The page should not freeze when displaying many elements at the same time.

## Other requirements

We expect a production-quality solution that also supports all major browsers.
What to invest in the "production-quality idea" is up to you.

Optional condition: the component might be an npm package that can be added to an application that is created via create-react-app.
