/* eslint-disable react/no-unescaped-entities */
import { Catalogs, Navbar } from "../../components";
import { useEffect, useState } from "react";
import { catalogService } from "../../service";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const CatalogsPage = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    await catalogService
      .getAll()
      .then((res) => {
        setItem(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex w-full flex-col p-3 gap-5">
      <Navbar name={"Bo'limlar"} isHidden={true} />
      {item.length === 0 ? (
        <h1>Ayni damda bo'limlar mavjud emas!</h1>
      ) : (
        <Catalogs item={item} />
      )}
      <div className="w-full flex justify-start">
        <Link
          to={"/add"}
          className="cursor-pointer px-6 py-3 w-[10%] bg-[#425568] text-white rounded-[5px] hover:bg-[#344352]"
        >
          +Qoshish
        </Link>
      </div>
    </div>
  );
};

export default CatalogsPage;
