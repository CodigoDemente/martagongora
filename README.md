## How

----- Here write stuff ----

### Layout

The main logic is in layout.svelte, there we call the translations files and the images that will be used in the all website. 
Despite this file, we do other api call on the galería for the instagram feed but nothing more. Other routes page will serve only to paint what we receive in the store. 
Reminder: the router is not dynamic, then everytime another menu entry wants to be added, we have to add it manually in the routes section.

### Translations

Each language has its own translation file, which contains all the text content organized into different sections. These translation files are stored in the browser's localStorage. The stored translation files are valid for one day. After this period, when a user selects a language, the application will make a new request to the server to fetch the updated translation file and store it again in localStorage.

### Images (not instagram feed)

We apply the same logic for the general images of the website, we store them in localStorage for 50min since AWS refresh the tag every hour. 

### Packages installed 

- tabler-icons: [Tabler icons](https://tabler.io/icons) svelte pluggin 
- svelte-inview: for lazy loading on images
- @sveltejs/adapter-vercel: to upload project on vercel, else not working.
- sass
- svelte-markdown
