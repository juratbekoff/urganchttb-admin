/* eslint-disable react/no-unescaped-entities */
import { Catalogs, Navbar } from "../components";
import { useEffect, useState } from "react";
import { catalogService } from "../service";
import "react-toastify/dist/ReactToastify.css";

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
      <Navbar name={"Bo'limlar"} isHidden={false} />
      {item.length === 0 ? (
        <h1>Ayni damda bo'limlar mavjud emas!</h1>
      ) : (
        <Catalogs item={item} />
      )}
    </div>
  );
};

export default CatalogsPage;
