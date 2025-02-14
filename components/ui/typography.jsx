const variants = {
  h1: "font-clash font-semibold text-4xl lg:text-[3rem]",
  h2: "font-clash font-semibold text-2xl lg:text-[2.5rem]",
  h3: "font-clash font-semibold text-xl lg:text-[1.5rem]",
  subtitle: "font-lato text-[1.1rem] lg:text-[1.5rem]",
  body: "font-lato text-base leading-relaxed",
  small: "font-lato text-sm",
  paragraph: "font-lato text-base lg:text-lg leading-relaxed",
};

export const Text = ({ 
  as: Component = 'p',
  children, 
  variant = "body",
  className = "",
  ...props 
}) => {
  return (
    <Component 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// Convenience components
export const H1 = (props) => <Text as="h1" variant="h1" {...props} />;
export const H2 = (props) => <Text as="h2" variant="h2" {...props} />;
export const H3 = (props) => <Text as="h3" variant="h3" {...props} />;
export const Subtitle = (props) => <Text variant="subtitle" {...props} />;
export const Body = (props) => <Text variant="body" {...props} />;
export const Small = (props) => <Text variant="small" {...props} />;
export const Paragraph = (props) => <Text variant="paragraph" {...props} />;

export default Text;
