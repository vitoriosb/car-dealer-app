import Link from "next/link";

interface ButtonProps {
  href: string;
  disabled: boolean;
  textButton: string;
}

export function Button({ href, textButton, disabled }: ButtonProps) {
  return (
    <>
      <Link
        href={href}
        className={`bg-blue-500 text-white px-4 py-2 rounded w-fit ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {textButton}
      </Link>
    </>
  );
}
