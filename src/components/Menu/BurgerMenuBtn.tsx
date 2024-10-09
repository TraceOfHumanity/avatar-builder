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
    <button className="fixed h-fit w-fit text-3xl p-1 border border-borderColor" onClick={toggleMenu}>
      <IoMenu />
    </button>
  );
};
