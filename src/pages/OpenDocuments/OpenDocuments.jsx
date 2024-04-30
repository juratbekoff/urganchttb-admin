import {Navbar, OpenDocumentsTable,} from "../../components/index.js";
import {useEffect, useState} from "react";
import {documentService} from "../../service/index.js";
import {Link} from "react-router-dom";

const OpenDocuments = () => {
    const [items, setItem] = useState([]);

    const getData = async () => {
        await documentService
            .getAll()
            .then((res) => {
                setItem(res.data?.documents);
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
            <Navbar name={"Ochiq ma'lumotlar"} isHidden={true}/>

            {items.length === 0 ? <h1>Ayni damda hech nima ochiq ma'lumotlar mavjud emas!!</h1> :
                <OpenDocumentsTable documents={items}/>}

            <div className="w-full flex justify-start">
                <Link
                    to={"/add-document"}
                    className="cursor-pointer px-6 py-3 w-[10%] bg-[#425568] text-white rounded-[5px] hover:bg-[#344352]"
                >
                    +Qoshish
                </Link>
            </div>
        </div>
    )
};

export default OpenDocuments;