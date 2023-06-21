/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Applications, Navbar } from "../components";
import { appService } from "../service";
import "react-toastify/dist/ReactToastify.css";

const AppPage = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    await appService
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
      <Navbar name={"Arizalar"} isHidden={true} />
      {item.length === 0 ? (
        <h1>Ayni damda arizalar yo'q!</h1>
      ) : (
        <Applications item={item} />
      )}
    </div>
  );
};

export default AppPage;
