import {useEffect, useRef} from "react";

import gsap from "gsap";
import {useAppSelector} from "hooks";

export const MenuContent = () => {
  const {isMenuOpen} = useAppSelector((state) => state.menuSlice);
  const menuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuContent = menuContentRef.current;

    gsap.fromTo(menuContent, {opacity: 0}, {opacity: 1, duration: 0.5});
  }, [isMenuOpen]);
  if (!isMenuOpen) return null;
  return (
    <div className=" fixed z-10 bg-red-500" ref={menuContentRef}>
      MenuContent
    </div>
  );
};
