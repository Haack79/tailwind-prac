'use client';
import MenuList from './MenuList';

interface Menu {
  label: string;
  to: string;
  children?: Menu[];
}

interface TreeViewProps {
  menuList: Menu[];
}

const TreeView = ({ menuList = [] }: TreeViewProps) => {
  return (
    <div className="min-h-screen w-1/4 bg-slate-400">
      <MenuList list={menuList} />
    </div>
  );
};

export default TreeView;
