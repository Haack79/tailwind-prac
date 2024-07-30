import LoadMoreData from "@/components/LoadMoreData";
import LightDarkMode from "@/components/LightDarkMode";
import ScrollIndicator from "@/components/ScrollIndicator";

const Dashboard = () => {
    return (
        <div className="flex-col items-center justify-center mt-3 w-screen h-screen">
            {/* <LoadMoreData /> */}
                {/* <LightDarkMode /> */}
            <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
        </div>
    );
};
export default Dashboard;