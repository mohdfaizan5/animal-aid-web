export const HoverLineBtn = ({ children }: { children: string }) => {
  return (
    <button
      role="link"
      className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-prim-green after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {children}
    </button>
  );
};
