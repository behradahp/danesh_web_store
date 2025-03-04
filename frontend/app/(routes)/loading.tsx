import { RingLoader } from "react-spinners";

function LoadingScreen() {
  return (
    <section className='w-full h-[100vh] flex justify-center items-center'>
      <RingLoader color='#768ebc' />
    </section>
  );
}

export default LoadingScreen;
