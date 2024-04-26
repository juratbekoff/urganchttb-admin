/* eslint-disable react/no-unescaped-entities */
import { postService } from "../../service";
import CatalogModal from "../../utils/CatalogModal";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Posts = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [elem, setElem] = useState([]);

  const onRead = (id) => {
    setShowModal(true);
    const data = item.filter((elem) => elem.id === id);
    setElem(data);
  };

  const onDelete = async (id) => {
    await postService.delete(id);
  };

  return (
    <>
      <div
        className={showModal ? "hidden" : `relative overflow-x-auto shadow-md`}
      >
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-800 uppercase bg-gray-100 border-b-[1px] border-b-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-[13.5px]">
                #ID
              </th>
              <th scope="col" className="px-6 py-3">
                Sarlavha
              </th>
              <th scope="col" className="px-6 py-3">
                Rasm
              </th>
              <th scope="col" className="px-6 py-3">
                Xabar
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {item.map((elem) => {
              return (
                <tr
                  key={elem.id}
                  className="bg-white border-b-2 hover:bg-gray-50 "
                >
                  <td className="px-6 py-4 font-medium">{elem.id}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 w-[35%] break-all text-[15px] font-medium "
                  >
                    {elem.title}
                  </th>
                  <td className="px-6 py-4 font-medium">
                    <img
                      src={`https://api.urganch-ttb.uz/api/posts/img/${elem.image}`}
                      alt="yuklanmadi!"
                      className="w-[80px] h-[11vh] border-[1px] border-gray-500 p-2"
                    />
                  </td>
                  <td
                    onClick={() => onRead(elem.id)}
                    className="px-6 py-4 font-medium text-blue-700 hover:underline cursor-pointer"
                  >
                    O'qish
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <a
                      href="/posts"
                      onClick={() => onDelete(elem.id)}
                      className="font-medium text-red-600  hover:underline cursor-pointer"
                    >
                      O'chirish
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showModal && (
        <CatalogModal onClose={() => setShowModal(false)} elem={elem[0]} />
      )}
    </>
  );
};

export default Posts;
