import * as React from 'react';
import { useSpring, animated } from 'react-spring';

export interface FadeProps {
    in: boolean;
    onEnter?: any;
    onExited?: any;
    children: React.ReactNode;
}

const Fade = React.forwardRef(function Fade(props: React.PropsWithChildren<FadeProps>, ref: React.ForwardedRef<HTMLDivElement>) {
    const { in: open, children, onEnter, onExited, ...other } = props;    
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
});

export default Fade;