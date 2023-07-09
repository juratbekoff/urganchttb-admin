/* eslint-disable react/no-unescaped-entities */
import { lsService } from "../service";
import { api_url } from "./../utils/api_url";

/* eslint-disable react/prop-types */
const Leadership = ({ item }) => {
  const onDelete = async (id) => {
    await lsService.delete(id);
  };

  return (
    <>
      <div className={`overflow-x-auto overflow-y-auto shadow-md`}>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-800 uppercase bg-gray-100 border-b-[1px] border-b-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-[13.5px]">
                #ID
              </th>
              <th scope="col" className="px-6 py-3">
                Ism-Familiya
              </th>
              <th scope="col" className="px-6 py-3">
                Rasm
              </th>
              <th scope="col" className="px-6 py-3">
                Lavozimi
              </th>
              <th scope="col" className="px-6 py-3">
                Telefon raqam
              </th>
              <th scope="col" className="px-6 py-3">
                Email
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
                  className="bg-white border-b-2 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium">{elem.id}</td>
                  <td scope="row" className=" py-4 font-medium ">
                    {elem.name}
                  </td>
                  <td className="pl-4  py-4 font-medium">
                    <img
                      src={`${api_url}/leadership/img/${elem.image}`}
                      alt="surat yuklanmadi!"
                      className="w-[80px] h-[11vh] border-[1px] border-gray-500 p-2"
                    />
                  </td>
                  <td className="pl-4 py-4 font-medium cursor-pointer">
                    {elem.position}
                  </td>
                  <td className="pl-4 py-4 font-medium cursor-pointer">
                    {elem.phone}
                  </td>
                  <td className="pl-4 py-4 font-medium cursor-pointer">
                    {elem.email}
                  </td>
                  <td className="pl-4 py-4 font-medium">
                    <a
                      href="/leadership"
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
    </>
  );
};

export default Leadership;
