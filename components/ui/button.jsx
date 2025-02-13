const Button = ({ 
    children, 
    variant = "primary", 
    className = "",
    type = "button",
    onClick,
    disabled = false,
    ...props 
}) => {
    const baseStyles = "font-medium px-[15px] py-[12px] rounded-full transition-colors duration-200";
    const variants = {
        primary: "bg-[#900A15] hover:bg-[#a20b17] text-white",
        secondary: "bg-white hover:bg-[#ddd] text-primary border border-primary",
        stroke: "bg-transparent hover:bg-[#900A15] text-[#900A15] hover:text-white border border-[#900A15]",
        strokePrimary: "bg-transparent hover:bg-[#900A15] text-[#900A15] hover:text-white border border-[#900A15]",
        strokeSecondary: "bg-transparent hover:bg-[#ddd] text-primary hover:text-primary border border-primary"
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
