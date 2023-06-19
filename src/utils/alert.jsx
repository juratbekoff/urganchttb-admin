import { toast } from "react-toastify";

const alert = (type) => {
  const props = {
    position: "top-right",
    autoClose: 400,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  switch (type) {
    case "SUCCESS":
      toast.success("Xabaringiz muvaffaqiyatli yuborildi!", props);
      break;
    case "ERROR":
      toast.error("Something went wrong!", props);
      break;
    default:
      toast("Wait! Default message!", props);
      break;
  }
};

export default alert;
