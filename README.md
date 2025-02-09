# On Going


# Create vite apps

## get started

1. install vite latest version
```
npm create vite@latest
```
2. follow the steps
3. choose react
4. install tailwind css and tailwind css vite
```
npm install tailwindcss @tailwindcss/vite
```
5. Add the @tailwindcss/vite plugin to my vite configuration

ussually in vite.config.js
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
6. import tailwind css in  css file
```
@import "tailwindcss";
```
7. start project
```
npm run dev
```
8. test it, change app.jsx to this

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
