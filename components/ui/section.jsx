
export const Section = ({ 
  children, 
  className = "", 
  container = true,
  spacing = "py-16",
  ...props 
}) => {
  return (
    <section 
      className={`${spacing} ${className}`} 
      {...props}
    >
      <div className={container ? "container mx-auto px-4" : ""}>
        {children}
      </div>
    </section>
  );
};

export default Section;
