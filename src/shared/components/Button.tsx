import type { ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "danger"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
    loading?: boolean
    fullWidth?: boolean
}

const Button = ({
    children,
    variant = "primary",
    loading = false,
    fullWidth = false,
    disabled,
    className = "",
    ...props
}: Props) => {
    const baseClass =
        "px-4 py-2 text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed hover:cursor-pointer"

    const variantClass: Record<Variant, string> = {
        primary: "bg-[#0076f3] text-white hover:opacity-70",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-[#f44647] text-white hover:bg-red-700",
    }

    return (
        <button
            {...props}
            disabled={loading || disabled}
            className={`${baseClass} ${variantClass[variant]} ${fullWidth ? "w-full" : ""
                } ${className}`}
        >
            {loading ? "Loading..." : children}
        </button>
    )
}

export default Button