const Page = () => (
  <div className="flex items-center justify-center h-screen bg-dark-background">
    <svg
      className="animate-spin h-12 w-12 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.11 15H2c0 3.309 2.691 6 6 6v-2c-1.654 0-3.15-.66-4.242-1.758zM12 20c-3.309 0-6-2.691-6-6h-2c0 4.418 3.582 8 8 8v-2zm5.89-2.291c-1.092 1.098-2.588 1.758-4.242 1.758v2c3.309 0 6-2.691 6-6h-2a8.004 8.004 0 01-1.89 2.291z"
      ></path>
    </svg>
  </div>
);

export default Page;