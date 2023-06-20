import { Institution, Navbar } from "../../components";
import { useEffect, useState } from "react";
import { instService } from "../../service";

const CatalogsPage = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    await instService
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
      <Navbar name={"Muassasalar"} isHidden={true} />
      {item.length === 0 ? (
        <h1>Ayni damda muassasalar mavjud emas!</h1>
      ) : (
        <Institution item={item} />
      )}
    </div>
  );
};

export default CatalogsPage;
