import menus from "./data";
import TreeView from "../../components/TreeView/TreeView";
import QRCodeGenerator from "@/components/QrCodeGenerator";

const Page = () => {
    return (
        <>
            <div className="flex-col justify-start mt-3 w-screen h-screen">
                <TreeView menuList={menus} />
            </div>
            <div>
                <QRCodeGenerator />
            </div>
        </>
    );
};

export default Page;
