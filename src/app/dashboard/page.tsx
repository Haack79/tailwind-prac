import LoadMoreData from "@/components/LoadMoreData";
import LightDarkMode from "@/components/LightDarkMode";
import ScrollIndicator from "@/components/ScrollIndicator";
import TabTest from "@/components/CustomTabs/TabTest";
import ModalShow from "@/components/ModalPopUp/ModalShow";
import DotMaker from "@/components/DotMaker/DotMaker";

const Dashboard = () => {
    return (
        <div className="flex-col items-center justify-center mt-3 w-screen h-screen">
            {/* <LoadMoreData /> */}
                {/* <LightDarkMode /> */}
            {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
            <TabTest />
            <ModalShow />
            <DotMaker />
        </div>
    );
};
export default Dashboard;