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
    <button
      className="rounded-md border-borderColor fixed h-fit w-fit border p-1 text-3xl"
      onClick={toggleMenu}
    >
      <IoMenu />
    </button>
  );
};
