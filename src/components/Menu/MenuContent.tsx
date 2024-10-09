import {useEffect, useRef} from "react";
import {IoMdClose} from "react-icons/io";
import {Link} from "react-router-dom";

import gsap from "gsap";
import {useAppDispatch, useAppSelector} from "hooks";

import {setIsMenuOpen} from "../../redux/slices/menu";

export const MenuContent = () => {
  const dispatch = useAppDispatch();
  const {isMenuOpen} = useAppSelector((state) => state.menuSlice);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    gsap.fromTo(
      menuContentRef.current,
      {x: 0},
      {
        x: "-100%",
        duration: 0.2,
        onComplete: () => {
          dispatch(setIsMenuOpen(false));
        },
      },
    );
  };

  useEffect(() => {
    const menuContent = menuContentRef.current;
    gsap.fromTo(menuContent, {x: "-100%"}, {x: 0, duration: 0.2});
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div
      className="border-borderColor rounded-md fixed z-10 flex h-[calc(100vh-16px)] min-w-52 flex-col border p-1 backdrop-blur-lg"
      ref={menuContentRef}
    >
      <button className="ml-auto h-fit w-fit text-3xl" onClick={closeMenu}>
        <IoMdClose />
      </button>
      <Link to="/">Home</Link>
    </div>
  );
};
