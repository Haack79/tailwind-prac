import LoadMoreData from "@/components/LoadMoreData";
import LightDarkMode from "@/components/LightDarkMode";
import ScrollIndicator from "@/components/ScrollIndicator";
import TabTest from "@/components/CustomTabs/TabTest";
import ModalShow from "@/components/ModalPopUp/ModalShow";
import DotMaker from "@/components/DotMaker/DotMaker";
import GithubProfileFinder from "@/components/GithubProfileFinder";
import SearchAutoCompleteAPI from "@/components/SearchAutoCompleteAPI";
import TicTacToe from "@/components/TicTacToe";

const Dashboard = () => {
    return (
        <div className="flex-col items-center justify-center mt-3 w-screen h-screen">
            {/* <LoadMoreData /> */}
                {/* <LightDarkMode /> */}
            {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
            <TabTest />
            <ModalShow />
            <div className="flex flex-row gap-2">
                <DotMaker />
                <GithubProfileFinder />
                <SearchAutoCompleteAPI />
            </div>
            <TicTacToe />
        </div>
    );
};
export default Dashboard;