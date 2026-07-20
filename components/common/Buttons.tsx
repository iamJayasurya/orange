import Link from "next/link"

type ButtonProps = {
  link: string
  label: string
  variant?: "white" | "black"
}

export default function Button({ link, label, variant = "white" }: ButtonProps) {
  const styles =
    variant === "white"
      ? "bg-[#fff] text-[#000]"
      : "bg-[#000] text-[#fff]"

  return (
    <Link href={link} className={`${styles} p-[15px_48px] uppercase text-[16px] leading-[20px] text-[500] `} aria-label={`${link} link to ${label}`}>
      {label}
    </Link>
  )
}