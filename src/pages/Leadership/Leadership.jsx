/* eslint-disable react/no-unescaped-entities */
import { Leadership, Navbar } from "../../components";
import { useEffect, useState } from "react";
import { lsService } from "../../service";
import { Link } from "react-router-dom";

const CatalogsPage = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    await lsService
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
      <Navbar name={"Rahbariyat"} isHidden={true} />
      {item.length === 0 ? (
        <h1>Ayni damda rahbariyat xodimlari mavjud emas!</h1>
      ) : (
        <Leadership item={item} />
      )}
      <div className="w-full flex justify-start">
        <Link
          to={"/add-leader"}
          className="cursor-pointer px-6 py-3 w-[10%] bg-[#425568] text-white rounded-[5px] hover:bg-[#344352]"
        >
          +Qoshish
        </Link>
      </div>
    </div>
  );
};

export default CatalogsPage;
