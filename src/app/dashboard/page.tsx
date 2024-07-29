import LoadMoreData from "@/components/LoadMoreData";
import LightDarkMode from "@/components/LightDarkMode";

const Dashboard = () => {
  return (
    <div className="flex-col items-center justify-center mt-3 w-screen h-screen">
      {/* <LoadMoreData /> */}
        <LightDarkMode />
    </div>
  );
};
export default Dashboard;