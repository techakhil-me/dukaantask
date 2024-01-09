import { ChevronDown, Home, Wallet } from "lucide-react";

function Sidebar() {
  const Links = [
    "Home",
    "Orders",
    "Products",
    "Delivery",
    "Marketing",
    "Analytics",
    "Payments",
    "Tools",
    "Discounts",
    "Audience",
    "Appearence",
    "Plugins",
  ];

  return (
    <div className="w-[16%] h-screen bg-[#1e2640] text-white px-2 py-4 gap-6 flex flex-col">
      <div className="flex w-full px-2 gap-2 justify-between items-center">
        <img className="rounded-[4px]" src="images/brand.png" alt="" />

        <div className="flex-1 flex-col justify-center items-start gap-1 inline-flex">
          <div className="text-white text-base font-medium  leading-snug">
            Nishyan
          </div>
          <a
            href="#"
            className="opacity-80 text-white text-xs font-normal underline leading-none"
          >
            Visit store
          </a>
        </div>

        <ChevronDown />
      </div>

      <div className="flex flex-col w-full flex-1 gap-1">
        {Links.map((link, id) => (
          <div
            key={id}
            className="px-4 opacity-80 py-2 rounded justify-start gap-3 inline-flex items-center hover:opacity-100 hover:bg-white hover:bg-opacity-10"
          >
            <Home size={20} />
            <div className=" text-white text-sm font-medium leading-tight">
              {link}
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full px-2 gap-2 justify-between items-center ">
        <div className="flex flex-1 rounded items-center  gap-2 px-3 py-2 bg-white bg-opacity-10">
          <div className="p-1 bg-white bg-opacity-10 rounded">
          <Wallet />
          </div>
          <div className="flex-col items-start flex gap-0.5">
            <div className="opacity-80 text-white text-xs font-normal leading-none">
              Available credits
            </div>
            <div className="text-white text-base font-medium leading-normal">
              222.10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
