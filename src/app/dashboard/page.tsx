import LoadMoreData from "@/components/LoadMoreData";
import LightDarkMode from "@/components/LightDarkMode";
import ScrollIndicator from "@/components/ScrollIndicator";
import TabTest from "@/components/CustomTabs/TabTest";
import ModalShow from "@/components/ModalPopUp/ModalShow";
import DotMaker from "@/components/DotMaker/DotMaker";
import GithubProfileFinder from "@/components/GithubProfileFinder";
import SearchAutoCompleteAPI from "@/components/SearchAutoCompleteAPI";
import TicTacToe from "@/components/TicTacToe";
import FeatureFlagGlobalState from "@/components/FeatureFlag/context/context";
import FeatureFlags from "@/components/FeatureFlag/FeatureFlag";
import UseFetchHookTest from "../hooks/useFetchTest";
import UseOnclickOutsideTest from "../hooks/useOutsideClickTest";
import UseWindowResizeText from "../hooks/useWindowResizeText";
import ScrollToTopAndBottom from "@/components/ScrollToTopAndBottom";
import ScrollToSection from "@/components/ScrollToSection";
import Weather from "@/components/Weather/Weather";
import Navbar from "@/components/Recipe/NavBar";
import ChakraContainer from "@/components/ChakraContainer";
import ChakraBox from "@/components/ChakraBox";

const Dashboard = () => {
    return (
        <div className="flex-col items-center justify-center mt-3 w-screen h-screen">
            {/* <UseOnclickOutsideTest /> */}
            {/* <LoadMoreData /> */}
            {/* <LightDarkMode /> */}
            {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
            {/* <TabTest />
            <ModalShow />
            <div className="flex flex-row gap-2">
                <DotMaker />
                <GithubProfileFinder />
                <SearchAutoCompleteAPI />
            </div>
            <UseFetchHookTest />
            <TicTacToe />
            <FeatureFlagGlobalState>
                <FeatureFlags />
            </FeatureFlagGlobalState> */}
            <UseWindowResizeText />
            {/* <ScrollToTopAndBottom /> */}
            {/* <ScrollToSection /> */}
            {/* <Weather /> */}
            <Navbar />
            <ChakraContainer />
        </div>
    );
};
export default Dashboard;