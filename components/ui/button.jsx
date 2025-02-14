const Button = ({ 
    children, 
    variant = "primary", 
    weight = "semibold",
    className = "",
    type = "button",
    onClick,
    disabled = false,
    ...props 
}) => {
    const baseStyles = "px-[21px] capitalize py-[12px] rounded-full transition-colors duration-200";
    const variants = {
        primary: "bg-primary hover:bg-[#a20b17] text-white",
        secondary: "bg-white hover:bg-[#ddd] text-primary",
        stroke: "bg-transparent hover:bg-primary text-primary hover:text-white border border-primary",
        strokePrimary: "bg-transparent hover:bg-primary text-primary hover:text-white border border-primary",
        strokeSecondary: "bg-transparent hover:bg-[#ddd] text-white hover:text-primary border border-white"
    };
    const weights = {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
    }

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${weights[weight]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
