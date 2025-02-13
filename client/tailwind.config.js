/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp, // Use the imported plugin
  ],
};




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/line-clamp'),
//     // ...
//   ],
// }