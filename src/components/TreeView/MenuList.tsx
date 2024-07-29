import MenuItem from "./MenuItem";

interface Menu {
    label: string;
    to: string;
    children?: Menu[];
  }
  
  interface MenuListProps {
    list: Menu[];
  }
  
  const MenuList = ({ list = [] }: MenuListProps) => {
    return (
      <ul className="list-none my-0 pl-4">
        {list && list.length > 0 ? list.map((item, index) => <MenuItem key={index} item={item} />) : <div>No items found</div>}
      </ul>
    );
  };
  
  export default MenuList;
  