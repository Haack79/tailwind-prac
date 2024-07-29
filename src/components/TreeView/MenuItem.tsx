import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from 'react-icons/fa';

interface Menu {
  label: string;
  to: string;
  children?: Menu[];
}

interface MenuItemProps {
  item: Menu;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [displayChildren, setDisplayChildren] = useState<Record<string, boolean>>({});

  const handleToggleChildren = (currentLabel: string) => {
    setDisplayChildren((prevState) => ({
      ...prevState,
      [currentLabel]: !prevState[currentLabel],
    }));
  };

  return (
    <li className="">
      <div className="flex justify-start items-center gap-2.5 cursor-pointer decoration-white">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayChildren[item.label] ? <FaMinus size={16}/> : <FaPlus size={16}/>}
          </span>
        )}
      </div>
      {item.children && item.children.length > 0 && displayChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;

