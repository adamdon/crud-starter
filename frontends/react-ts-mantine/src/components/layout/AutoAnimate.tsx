import { type ReactNode } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type AutoAnimateProps = {
    children: ReactNode;
    className?: string;
};

export const AutoAnimate = ({ children, className }: AutoAnimateProps) => {
    // The hook handles the ref and initialization automatically
    const [parent] = useAutoAnimate();

    return (
      <div ref={parent} className={className}>
          {children}
      </div>
    );
}

export default AutoAnimate;