"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";

// Components
import Button from "@/app/components/Common/Button";
import { myToast } from "@/app/lib/config/toast";

// Context
import { useStore } from "@/app/lib/store/store";
import { AuthActionTypes } from "@/app/lib/store/auth/auth-reducer";

interface LoginData {
  username: string;
  password: string;
}

function LoginForm() {
  const { dispatch } = useStore();
  const navigate = useRouter();

  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginFC = async () => {
    setIsLoading(true);
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) return res.json();

        return null;
      })
      .then((data) => {
        if (data) {
          dispatch({ type: AuthActionTypes.Login, payload: data.userInfo });
          myToast.success("ورود موفقیت آمیز بود");
          navigate.push("/");
        } else myToast.error("نام کاربری یا رمز عبور اشتباه است");
      });
    setIsLoading(false);
  };

  return (
    <form
      className='flex flex-col items-center'
      onSubmit={(e) => {
        e.preventDefault();
        loginFC();
      }}
    >
      <span className='text-[40px] text-mainBg font-[600] mb-5 lg:mb-13'>
        صفحه ورود
      </span>
      <input
        type='text'
        className='bg-mainBg min-w-[300px] mb-4 py-2 px-1 rounded-lg'
        onChange={(e) =>
          setLoginData({ ...loginData, username: e.target.value })
        }
      />
      <input
        type='password'
        className='bg-mainBg min-w-[300px] mb-13 py-2 px-1 rounded-lg'
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />
      <Button
        text={isLoading ? "" : "ورود"}
        element={isLoading ? <SyncLoader color='white' size={10} /> : undefined}
        buttonStyles={`bg-info w-full justify-center py-4`}
        textStyles='text-white'
      />
    </form>
  );
}

export default LoginForm;
