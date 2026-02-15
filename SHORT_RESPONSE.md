# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim. 

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content). 

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

Functions like `fetch()` are asynchronus, meaning they don't block the program while waiting for a result. Unlike **synchronus** code, which runs line by line from top to bottom, asynchronus operations allow other code to continue executing while tasks like network requests are being processed. 

`fetch()` returns a `Promise` which represetns a future value. That promise either resolves with a **success** response or rejects with an **error**. Asynchronus execution is important because it prevents the application from freezing and keeps it responsive while handling long-running operations like API calls, database queries, or file uploads.
## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

The main difference between `GET` and `POST` requests is how they interact with an API. A `GET` request is used to **retreive** data from the server, such as fetching all products or a specific product by ID. 

It does not change any data on the server, typically to create a new resource. It is commonly used when submitting forms because it sends **user input** to be processed and stored. In short, `GET` is used to **fetch** data, while `POST` is used to **send** and **create** data.


```
fetch ("/api/products")

GET /api/products

POST /api/products
```
The server quieries the database, it returns a list of products. Then the response is rendered in the `DOM`.

When a new item is added, a `POST` request creates that product in the system.

In a Product API, I’d use `GET` when I need to read data, like fetching products to display on a page. It doesn’t modify anything on the server. I’d use `POST` when creating something new, like adding a product through an admin dashboard, because it sends data in the request body and updates the database. So `GET` is for **readin**g** data, and `POST` is for **creating** data.”

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Vite** is a modern frontend build tool and development server. It helps developers quickly set up and run Javascript application with fast startup times. Vite solves the problem of development builds in older bundlers. Instead of bundling the entire project before serving it, Vite uses native ES modules in the browser during development, which makes it significantly faster. 

It provides the environment where we can write code that fetches data using tools like `fetch()`, along with `async/`, `await`, `.then()`, and `.catch()` to handle asynchronous operations. Within a Vite project, we can manipulate the DOM, handle forms, and dynamically update the UI based on API responses.

