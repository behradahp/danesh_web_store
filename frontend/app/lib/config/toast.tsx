import Image from "next/image";

// toastify
import { ToastContainer } from "react-toastify";
import { Bounce, toast } from "react-toastify";

// Icons
import errorCloseIcon from "./toastify-icons/error-close.svg";
import successCloseIcon from "./toastify-icons/success-close.svg";
import errorInfoIcon from "./toastify-icons/error-info.svg";
import successInfoIcon from "./toastify-icons/success-info.svg";

export const ConfigedToastContainer = () => {
  return (
    <ToastContainer
      closeButton={({ type }: { type: string }) => {
        return (
          <div className='absolute top-[10px] left-[10px]'>
            {type === "error" ? (
              <Image
                src={errorCloseIcon}
                alt='Close Icon'
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={successCloseIcon}
                alt='Close Icon'
                width={20}
                height={20}
              />
            )}
          </div>
        );
      }}
      icon={({ type }: { type: string }) => (
        <>
          {type === "error" ? (
            <Image src={errorInfoIcon} alt='Info Icon' width={70} height={70} />
          ) : (
            <Image
              src={successInfoIcon}
              alt='Info Icon'
              width={200}
              height={200}
            />
          )}
        </>
      )}
    />
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const myToast = {
  error: (text: string) =>
    toast.error(text, {
      className: "custom-toast",
      style: {
        backgroundColor: "#FFF2F4",
        border: "1px solid #A62639",
        color: "#A62639",
      },
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }),
  success: (text: string) =>
    toast.success(text, {
      className: "custom-toast",
      style: {
        backgroundColor: "#ECFFF2",
        border: "1px solid #0D8B0B",
        color: "#0D8B0B",
      },
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }),
};
