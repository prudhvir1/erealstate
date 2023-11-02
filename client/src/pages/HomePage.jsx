import { useDispatch, useSelector } from "react-redux";
import { Header, Sidebar, Main } from "../components";
import "../styles/HomePage.css";
import { sidebarMenu } from "../redux/slice/menuSlice.js";

function HomePage() {
  const dispatch = useDispatch();
  return (
    <section className="text-white h-full w-screen flex flex-col items-center justify-center">
      <div
        className={
          useSelector((state) => state.menu.sidebarMenu) ? "showBG" : "hideBG"
        }
      >
        <div
          className={
            useSelector((state) => state.menu.sidebarMenu)
              ? "showSidebar"
              : "hideSidebar"
          }
        >
          <Sidebar />
        </div>
        <div
          className="z-0 h-full w-full absolute top-0 left-0"
          onClick={() => dispatch(sidebarMenu(false))}
        ></div>
      </div>
      <div className="h-16 w-full flex items-center justify-center bg-cobalt">
        <Header />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <Main />
      </div>
    </section>
  );
}

export default HomePage;
