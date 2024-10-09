import {useEffect, useRef} from "react";
import {IoMdClose} from "react-icons/io";

import gsap from "gsap";
import {useAppDispatch, useAppSelector} from "hooks";

import {setIsMenuOpen} from "../../redux/slices/menu";

export const MenuContent = () => {
  const dispatch = useAppDispatch();
  const {isMenuOpen} = useAppSelector((state) => state.menuSlice);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    dispatch(setIsMenuOpen(false));
  };
  useEffect(() => {
    const menuContent = menuContentRef.current;

    gsap.fromTo(menuContent, {opacity: 0}, {opacity: 1, duration: 0.5});
  }, [isMenuOpen]);
  if (!isMenuOpen) return null;
  return (
    <div
      className="fixed z-10 flex h-[calc(100vh-16px)] flex-col border border-borderColor p-1 backdrop-blur"
      ref={menuContentRef}
    >
      <button className="ml-auto h-fit w-fit text-3xl" onClick={closeMenu}>
        <IoMdClose />
      </button>
      MenuContent
    </div>
  );
};
