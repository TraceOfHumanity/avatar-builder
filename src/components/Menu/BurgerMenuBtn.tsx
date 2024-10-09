import {IoMenu} from "react-icons/io5";

import {useAppDispatch, useAppSelector} from "hooks";

import {setIsMenuOpen} from "../../redux/slices/menu";

export const BurgerMenuBtn = () => {
  const dispatch = useAppDispatch();
  const {isMenuOpen} = useAppSelector((state) => state.menuSlice);

  const toggleMenu = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <button className="border border-black p-1" onClick={toggleMenu}>
      <IoMenu className="text-2xl" />
    </button>
  );
};
