import menus from "./data";
import TreeView from "../../components/TreeView/TreeView";

const Page = () => {
  return (
    <div className="flex-col justify-start mt-3 w-screen h-screen">
      <TreeView menuList={menus} />
    </div>
  );
};

export default Page;
