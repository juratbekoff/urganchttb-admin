/* eslint-disable react/prop-types */
const Navbar = ({ name, isHidden }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pr-10 p-3 border-b-2 shadow-sm bg-gray-50">
        <h1 className="text-[22px] font-semibold pl-5">{name}</h1>
        <input
          type="search"
          className={
            isHidden
              ? "hidden"
              : "block px-1 p-2 w-[300px] text-sm text-gray-900 outline-none border-slate-500 border-gray-100  bg-gray-50 outline-none rounded-none border-b-[1px]"
          }
          placeholder="Search..."
          required
        />
      </div>
    </div>
  );
};

export default Navbar;
