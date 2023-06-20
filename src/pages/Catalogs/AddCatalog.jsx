/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "../../components";

const AddCatalog = () => {
  return (
    <div className="flex w-full flex-col p-3 gap-5">
      <Navbar name={"Yangi bo'lim qo'shish"} isHidden={true} />

      <div>
        <h1>Qoshish page</h1>
      </div>
    </div>
  );
};

export default AddCatalog;
