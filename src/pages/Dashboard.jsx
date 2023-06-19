import { Dashboard, Navbar } from "../components";
import { useEffect, useState } from "react";
import { dashService } from "../service";

const DashboardPage = () => {
  const [item, setItem] = useState("");

  const getData = async () => {
    await dashService
      .getCount()
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
    <div className="flex w-full flex-col p-3">
      <Navbar name={"Dashboard"} isHidden={true} />
      <Dashboard item={item} />
    </div>
  );
};

export default DashboardPage;
