## Welcome to the Blood Bank.

In it, you will be able to navigate between the candidate registration and information balance functions.

The application has just one page with all functionalities.

To consult the API documentation, see: https://github.com/e-manuelb/blood-bank-api

To run the project, just clone the repository and change the environment variables in `src/environments/environment.ts`.

```typescript
const port = 8080; (port to change depending on your server)

export const environment = {
  production: false,
  title: 'Local Environment Heading',
  apiURL: `http://localhost:${port}/api`
}

```

After this, just run `npm i` and `ng serve` to execute your application.

I hope that you enjoyed.
