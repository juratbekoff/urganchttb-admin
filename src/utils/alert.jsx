import { toast } from "react-toastify";

const alert = (type, err, msg) => {
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
      toast.success(msg ? msg : "Xabaringiz muvaffaqiyatli yuborildi!", props);
      break;
    case "ERROR":
      toast.error(err ? err : "Something went wrong!", props);
      break;
    default:
      toast("Wait! Default message!", props);
      break;
  }
};

export default alert;
