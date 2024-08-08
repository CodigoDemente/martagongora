## Start the project

First install the project with `npm install` start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## How

----- Here write stuff ----

### Translations

Each language has its own translation file, which contains all the text content organized into different sections. These translation files are stored in the browser's localStorage to improve performance and reduce the need for repeated server requests. The stored translation files are valid for one day. After this period, when a user selects a language, the application will make a new request to the server to fetch the updated translation file and store it again in localStorage.

### Packages installed 

- tabler-icons: [Tabler icons](https://tabler.io/icons) svelte pluggin 
- svelte-inview: for lazy loading on images
- @sveltejs/adapter-vercel: to upload project on vercel, else not working.
- sass
