import {useAppSelector} from "hooks";

import {BurgerMenuBtn} from "./BurgerMenuBtn";
import {MenuContent} from "./MenuContent";

export const Menu = () => {
  const {isMenuOpen} = useAppSelector((state) => state.menuSlice);
  return (
    <div className="fixed left-2 top-2 z-50 h-fit">
      <BurgerMenuBtn />
      <MenuContent />
    </div>
  );
};
