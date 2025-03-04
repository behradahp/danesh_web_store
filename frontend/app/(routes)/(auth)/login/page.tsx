import Image from "next/image";

// Components
import LoginForm from "@/app/components/Login/LoginForm";

// Image
import loginVector from "@/app/assets/images/login-vector.png";

function LoginPage() {
  return (
    <div className='flex-grow flex justify-center items-center gap-20'>
      <LoginForm />
      <Image src={loginVector} alt='Vector Login' width={300} height={300} />
    </div>
  );
}

export default LoginPage;
