import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileMenu, sidebarMenu } from "../../redux/slice/menuSlice";

function Header() {
  const dispatch = useDispatch();
  const liStyle =
    "p-2 px-2 flex items-center cursor-pointer hover:bg-gray-200 rounded-lg";

  return (
    <>
      {/* Left Side -- Icon and Menu Section */}
      <div className="w-full h-full flex">
        <div className="w-full left-0 flex items-center ml-4 sm:ml-10">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(sidebarMenu(true))}
          >
            <MenuIcon />
          </div>
          <div className="p-2 sm:p-4">
            <Link to="/">
              <h1 className="text-white sm:text-lg font-monstserrat font-bold">
                eREALSTATE
              </h1>
            </Link>
          </div>
        </div>

        {/* Right Side -- User details & Options Section */}
        <div className="w-full flex items-center justify-end ">
          <div
            className="h-4/6 flex items-center justify-end mr-4 sm:mr-20 rounded-lg p-2 relative "
            onMouseEnter={() => dispatch(profileMenu(true))}
            onMouseLeave={() => dispatch(profileMenu(false))}
          >
            <AccountCircleOutlinedIcon fontSize="small" />
            <h1 className="px-1 sm:pr-4 text-sm sm:text-lg font-semibold font-monstserrat">
              Prudhvi
            </h1>
            {useSelector((state) => state.menu.profileMenu) ? (
              <ExpandLessOutlinedIcon />
            ) : (
              <ExpandMoreIcon />
            )}
            {useSelector((state) => state.menu.profileMenu) && (
              <div className="absolute bg-white rounded-lg top-10">
                <ul className="text-blueback p-4">
                  <li className={liStyle}>
                    <AccountCircleOutlinedIcon
                      fontSize="small"
                      className="mr-2"
                    />
                    My Profile
                  </li>
                  <li className={liStyle}>
                    <NotificationsNoneOutlinedIcon
                      fontSize="small"
                      className="mr-2"
                    />
                    Notifications
                  </li>
                  <li className={liStyle}>
                    <SettingsOutlinedIcon fontSize="small" className="mr-2" />
                    Settings
                  </li>
                  <li className={liStyle}>
                    <LogoutIcon fontSize="small" className="mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
