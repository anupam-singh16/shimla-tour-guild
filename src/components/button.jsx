export default function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold ${
        variant === "outline"
          ? "border border-sky-500 text-sky-500"
          : "bg-sky-600 text-white"
      }`}
    >
      {children}
    </button>
  );
}
