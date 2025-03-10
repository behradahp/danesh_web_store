import Image from "next/image";

// Icons
import brandIcon from "@/app/assets/icons/admin-panel/statistics/brand-icon.svg";
import categoriesIcon from "@/app/assets/icons/admin-panel/statistics/categories-icon.svg";
import orderIcon from "@/app/assets/icons/admin-panel/statistics/order-icon.svg";
import productsIcon from "@/app/assets/icons/admin-panel/statistics/products-icon.svg";
import usersIcon from "@/app/assets/icons/admin-panel/statistics/users-icon.svg";

// Constants
const colors = ["#ec0a29", "#2c3949", "#7d3de2", "#f16920", "#0188cc"];
const icons = [usersIcon, brandIcon, categoriesIcon, productsIcon, orderIcon];
const titles = [
  "کاربران فعال",
  "تعداد برندها",
  "دسته بندی های سایت",
  "تعداد محصولات",
  "سفارشات ثبت شده",
];

function AdminMainPageStatistics() {
  return (
    <div className='w-full flex flex-wrap gap-y-8 gap-x-2'>
      {Array(5)
        .fill(0)
        .map((item, index) => {
          return (
            <div
              key={item + index}
              className='flex items-center justify-around gap-6 w-[250px] bg-white shadow-header rounded-md py-3 overflow-hidden'
            >
              {/* Icons */}
              <div
                className='w-[50px] h-[50px] flex justify-center items-center rounded-full'
                style={{
                  boxShadow: `0px 0px 40px 10px ${colors[index]}4d`,
                  backgroundColor: `${colors[index]}`,
                }}
              >
                <Image src={icons[index]} alt='icon' width={35} height={35} />
              </div>

              {/* Title */}
              <div className='flex flex-col gap-2 self-end'>
                <span className='text-[16px] font-[500] text-[#aaafb3]'>
                  {titles[index]}
                </span>
                <span className='text-[20px] font-[700]'>۵ عدد</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AdminMainPageStatistics;
