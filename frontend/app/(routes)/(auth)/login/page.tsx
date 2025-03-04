import Image from "next/image";

// Components
import LoginForm from "@/app/components/Login/LoginForm";

// Image
import loginVector from "@/app/assets/images/login-vector.png";

function LoginPage() {
  return (
    <div className='flex-grow flex flex-col-reverse lg:flex-row justify-center items-center gap-5 lg:gap-20'>
      <LoginForm />
      <Image
        src={loginVector}
        alt='Vector Login'
        width={0}
        height={0}
        sizes='100vw'
        className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]'
      />
    </div>
  );
}

export default LoginPage;
