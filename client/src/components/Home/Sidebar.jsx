import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import ForumIcon from "@mui/icons-material/Forum";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useDispatch } from "react-redux";
import { sidebarMenu } from "../../redux/slice/menuSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const liStyle = "p-3 ml-10 mr-3 hover:bg-gray-800 rounded-lg";
  const ulStyle = "py-3";

  return (
    <>
      {/* Top Side -- Icon and Menu Section */}
      <div className="h-16 flex items-center ml-6 sm:ml-10">
        <div className="cursor-pointer">
          <CloseIcon onClick={() => dispatch(sidebarMenu(false))} />
        </div>
        <div className="left-0 p-2 sm:p-4">
          <h1 className="text-white sm:text-lg font-monstserrat font-bold">
            eREALSTATE
          </h1>
        </div>
      </div>
      {/* Bottom Side -- Menu List */}
      <div className="w-64 flex flex-col">
        <hr />
        <ul className={ulStyle}>
          <Link to="/Home">
            <li className={liStyle}>Profile</li>
          </Link>
        </ul>
        <hr />
        <ul className={ulStyle}>
          <li className={liStyle}>State Head</li>
          <li className={liStyle}>Developers</li>
          <Link to="/Home/Agents">
            <li className={liStyle}>Agents</li>
          </Link>
          <li className={liStyle}>Users</li>
        </ul>
        <hr />
        <ul className={ulStyle}>
          <li className={liStyle}>
            <SettingsIcon />
            Settings
          </li>
          <li className={liStyle}>
            <QuestionMarkIcon />
            Help
          </li>
          <li className={liStyle}>
            <FlagIcon />
            Report
          </li>
          <li className={liStyle}>
            <ForumIcon />
            Feedback
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
