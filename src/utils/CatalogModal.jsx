/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";

const AppModal = ({ onClose, elem }) => {
  const data = [
    {
      title: "ID",
      message: elem.id,
    },
    {
      title: "Sarlavha",
      message: elem.title,
    },
    {
      title: "Xabar",
      message: elem.descr,
    },
    {
      title: "Yaratildi",
      message: elem.createdAt.slice(0, 10),
    },
    {
      title: "Oxirgi yangilanish",
      message: elem.updatedAt.slice(0, 10),
    },
  ];

  return (
    <div className="flex justify-center mt-[-80px]">
      <div className="bg-white px-10 w-[50%] flex flex-col px-10 py-7 shadow-xl">
        <span className="p-0 m-0 text-right cursor-pointer" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </span>
        <div className="flex flex-col gap-2">
          {data.map((elem, key) => {
            return (
              <div
                key={key}
                className="border-b-[1.5px] border-b-gray-500 text-[16px] flex justify-between gap-10"
              >
                <p className="font-semibold">{elem.title}: </p>
                <p className="text-end">{elem.message}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 text-[15px] py-1 rounded-[3px]"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
