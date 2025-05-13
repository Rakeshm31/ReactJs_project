/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{},
      container:{
        center:true,
        /*padding: Defines custom padding values for different screen sizes (sm, lg, xl, 2xl). This ensures that the container has more padding on larger screens to maintain spacing and a clean layout.
Default padding (1rem for the smallest screens).
On sm screens (small devices), the padding becomes 2rem, and on larger screens (e.g., lg, xl, 2xl), it increases further (4rem, 5rem, and 6rem).1rem=16px
*/
        padding:{
          default:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem',
        }
      }
    },
  },
  plugins: [],
}

