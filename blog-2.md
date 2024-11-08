# Handling Asynchronous Operations with Async/Await in TypeScript

Asynchronous programming is essential for building responsive applications, especially when handling operations that take time, such as data fetching. In JavaScript and TypeScript, asynchronous operations are typically managed using callbacks, promises, or the async/await syntax.

### What is a Promise?

A Promise is an object representing the eventual result of an asynchronous operation. Promises allow us to handle actions that take time in a structured way. A Promise can be in one of three states:

- **Pending**: The operation has not yet completed.
- **Fulfilled**: The operation completed successfully, and the result is available.
- **Rejected**: The operation failed, and an error is available.

### Async/Await in TypeScript

The async/await syntax is built on top of Promises and offers a simpler way to write asynchronous code, making it look more like synchronous code. Using async/await can make your code easier to read and maintain.

## Usage Example

### 1. Defining an Async Function

To define an async function, use the `async` keyword before the function. An async function automatically returns a Promise.



 ```typescript 
const Promises = new Promise((resolve, reject) => {
  // Asynchronous operation or task
  // If successful, call resolve with the result
  // If there's an error, call reject with the reason
});


async function fetchData(): Promise<string> {
    return "Data fetched";
}
````

# Awaiting Asynchronous Operations

To wait for an asynchronous operation to complete, use `await` before the Promise. This pauses the execution of the function until the Promise resolves or rejects, allowing your code to run in a more synchronous style.

```
async function getData():Promise<void> {
    const data = await fetchData();
    console.log(data);
}
