import Image from "next/image";

// Image
import registerVector from "@/app/assets/images/register-vector.png";
import Button from "@/app/components/Common/Button";

function RegisterPage() {
  return (
    <div className='flex-grow flex justify-center items-center gap-20'>
      <div className='flex flex-col items-center'>
        <span className='text-[40px] text-mainBg font-[600] mb-13'>
          صفحه ثبت نام
        </span>
        <input
          type='text'
          className='bg-mainBg min-w-[300px] mb-4 py-2 px-1 rounded-lg'
        />
        <input
          type='text'
          className='bg-mainBg min-w-[300px] mb-13 py-2 px-1 rounded-lg'
        />
        <Button
          text='ثبت نام'
          buttonStyles='bg-info w-full justify-center'
          textStyles='text-white'
        />
      </div>
      <Image src={registerVector} alt='Vector Login' width={300} height={300} />
    </div>
  );
}

export default RegisterPage;
