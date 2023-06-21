import { Posts, Navbar } from "../../components";
import { useEffect, useState } from "react";
import { postService } from "../../service";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    await postService
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
      <Navbar name={"Maqolalar"} isHidden={true} />
      {item.length === 0 ? (
        <h1>Ayni damda maqolalar mavjud emas!</h1>
      ) : (
        <Posts item={item} />
      )}
      <div className="w-full flex justify-start">
        <Link
          to={"/add-post"}
          className="cursor-pointer px-6 py-3 w-[10%] bg-[#425568] text-white rounded-[5px] hover:bg-[#344352]"
        >
          +Qoshish
        </Link>
      </div>
    </div>
  );
};

export default PostsPage;
