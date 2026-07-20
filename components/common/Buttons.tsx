import Link from "next/link"

type ButtonProps = {
  link: string
  label: string
  variant?: "white" | "black"
}

export default function Button({ link, label, variant = "white" }: ButtonProps) {
  const styles =
    variant === "white"
      ? "bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] border-[#fff] hover:border-[#000]"
      : "bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000]"

  return (
    <Link href={link} className={`${styles} block w-fit       border-1 p-[15px_48px] rounded-[5px] transition-colors
                        duration-300
                         uppercase text-[16px] leading-[20px] text-[500] `} aria-label={`${link} link to ${label}`}>
      {label}
    </Link>
  )
}