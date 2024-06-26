import { Link } from "react-router-dom";
import "../App.css";
import { SidebarData } from "../utils/SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar p-3 flex flex-col ">
      <Link
        to={"/"}
        className="text-[20px] text-white border-b-[1px] px-2 pt-3 pb-4 font-medium cursor-pointer"
      >
        Urganch-TTB
      </Link>

      <ul className="flex flex-col text-white gap-1 mt-5 pb-[360px]">
        {SidebarData.map((elem) => {
          return (
            <Link
              to={elem.to}
              key={elem.to}
              className={`text-sm p-1 flex gap-1 cursor-pointer hover:bg-[#3d4b58] hover:transition-all`}
            >
              <span className="self-center font-light p-1">{elem.title}</span>
            </Link>
          );
        })}
      </ul>
      <h3 className="hidden text-[18px] text-white p-2 flex gap-1 cursor-pointer hover:bg-[#df1e1e] hover:transition-all">
        Chiqish
      </h3>
    </div>
  );
};

export default Sidebar;
