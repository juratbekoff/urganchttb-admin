/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Dashboard = ({ item }) => {
  const data = [
    {
      title: "Arizalar",
      count: item.appCount,
      link: "/applications",
    },
    {
      title: "Bo'limlar",
      count: item.catologsCount,
      link: "/catalogs",
    },
    {
      title: "Muassasalar",
      count: item.instCount,
      link: "/institutions",
    },
    {
      title: "Maqolalar",
      count: item.postCount,
      link: "/posts",
    },
  ];

  return (
    <div className="flex mt-8 w-full gap-10">
      {data.map((elem, key) => {
        return (
          <Link
            to={elem.link}
            key={key}
            className="flex flex-col items-star bg-white shadow-md w-[20%] items-center py-6 rounded-md hover:bg-blue-400 hover:text-white transition-all"
          >
            <p className="font-medium text-[20px]">{elem.title}</p>
            <h2 className="text-xl">{elem.count} ta</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;
