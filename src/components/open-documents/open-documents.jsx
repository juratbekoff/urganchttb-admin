/* eslint-disable react/no-unescaped-entities */
import {documentService} from "../../service";
import {api_url} from "../../utils/api_url.js";
import {Link} from "react-router-dom";
import {FiDownload} from "react-icons/fi";

/* eslint-disable react/prop-types */
const OpenDocuments = ({documents}) => {
    const onDelete = async (id) => {
        await documentService.delete(id);
    };

    return (
        <>
            <div className={`relative overflow-x-auto shadow-md`}>
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
                            Muqova rasmi
                        </th>
                        <th scope="col" className="px-6 py-3">
                            File
                        </th>
                        <th scope="col" className="px-6 py-3">
                            O'chirish
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        documents?.map((elem) => (
                            <tr className="bg-white border-b-2 hover:bg-gray-50" key={elem.id}>
                                <td className="px-6 py-4 font-medium">250</td>
                                <td scope="row" className="px-6 py-4 w-[35%] break-all text-[15px] font-medium">
                                    {elem.title}
                                </td>

                                <td className="px-6 py-4 font-medium">
                                    <img
                                        src={`${api_url}/open-documents/img/${elem.cover_image}`}
                                        alt="yuklanmadi!"
                                        className="w-[80px] h-[11vh] border-[1px] border-gray-500 p-2"
                                    />
                                </td>

                                <td scope="row" className="px-6 py-4  break-all text-[15px] font-medium">
                                    <Link to={`${api_url}/open-documents/file/${elem.file_url}`} target={"_blank"}
                                          className={"flex items-center gap-1"}>
                                        <FiDownload className={"text-xl"}/>
                                        <span className={"font-medium mt-[2px]"}>Yuklash</span>
                                    </Link>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <a
                                        href="/open-documents"
                                        onClick={() => onDelete(elem.id)}
                                        className="font-medium text-red-600  hover:underline cursor-pointer"
                                    >
                                        O'chirish
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OpenDocuments;
