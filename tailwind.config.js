/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ให้ Tailwind ตรวจสอบไฟล์ใน src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

