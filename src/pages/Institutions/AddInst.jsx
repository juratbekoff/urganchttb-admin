/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "../../components";
import { useState } from "react";
import alert from "../../utils/alert";
import { instService } from "../../service/";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const AddInst = () => {
  const [items, setItems] = useState({ title: "", descr: "" });
  const [file, setFile] = useState({ image: "" });
  const [loading, setLoading] = useState(false);

  const changeInputHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const changeIFileHandler = (e) => {
    setFile({ image: e.target.files[0] });
  };

  const addFormHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", file.image);
    formData.append("title", items.title);
    formData.append("descr", items.descr);

    await instService
      .create(formData)
      .then((res) => {
        console.log(res.data);
        alert("SUCCESS", undefined, "Bo'lim muvaffaqiytali qo'shildi!");
        setLoading(false);
        setItems({ title: "", descr: "" });
        setFile({ image: "" });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        alert("ERROR", err.message);
      });
  };

  return (
    <div className="flex w-full flex-col p-3 gap-5">
      <ToastContainer />
      <Navbar name={"Yangi muassasa qo'shish"} isHidden={true} />

      <Link to={"/institutions"}> {"<-- Ortga"} </Link>

      <form
        className="w-full flex flex-col gap-2 items-center"
        onSubmit={addFormHandler}
      >
        <input
          className="w-[30%] bg-white border border-gray-300 rounded-md text-sm text-gray-900 p-[5.1px] mt-[2px] cursor-pointer"
          id="file_input"
          type="file"
          onChange={changeIFileHandler}
          name="image"
          required
        />
        <input
          type="text"
          placeholder="Sarlavha"
          className="w-[30%] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 max-md:py-1 max-md:placeholder:text-[13.5px] max-md:rounded"
          onChange={changeInputHandler}
          name="title"
          value={items.title}
          required
        />

        <textarea
          cols="10"
          rows="5"
          placeholder="Tavsifini kiriting"
          className="w-[30%] mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 placeholder:text-[15px]"
          onChange={changeInputHandler}
          name="descr"
          value={items.descr}
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={
            loading
              ? "w-[30%] border-none rounded-md outLinkne-none bg-[#258ebe] text-white px-6 py-[6px] text-[17px] max-md:text-[14px] max-md:rounded max-md:py-[6px]"
              : "w-[30%] border-none rounded-md outLinkne-none bg-[#1A6F96] text-white px-6 py-[6px] text-[17px] max-md:text-[14px] max-md:rounded max-md:py-[6px]"
          }
        >
          {loading ? "Qo'shilyapti..." : "Qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default AddInst;
