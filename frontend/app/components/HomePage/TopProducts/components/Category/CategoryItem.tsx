import Image, { StaticImageData } from "next/image";

interface ICategoryItemProps {
  selected: boolean;
  name: string;
  image: StaticImageData;
  onClick: () => void;
}

function CategoryItem({ selected, name, image, onClick }: ICategoryItemProps) {
  return (
    <button
      className='relative w-[140px] h-[55px] bg-white rounded-full p-[2px] cursor-pointer'
      onClick={onClick}
    >
      <div
        className={`w-full h-full flex items-center justify-end pl-4 rounded-full ${
          selected ? "bg-[#dce6ff]" : "bg-white"
        } border-[3px] border-[#dce6ff] transition-all`}
      >
        <span className='text-primary font-[500]'>{name}</span>
      </div>

      <div className='absolute top-[1px] right-[2px] w-[52px] h-[52px] flex justify-center items-center bg-white border-[3px] border-[#dce6ff] rounded-full'>
        <Image
          src={image}
          alt='Category-image'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: "75%", height: "75%" }}
          className='rounded-full'
        />
      </div>
    </button>
  );
}

export default CategoryItem;
