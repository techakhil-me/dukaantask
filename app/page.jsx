import { HelpCircle, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "./components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* top bar */}

      <div className="px-8 py-3 w-full bg-white border-b border-[#D9D9D9] justify-between items-center gap-4 inline-flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <div className="text-[#1A181E] text-sm font-normalleading-snug">
            Payments
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <HelpCircle size={16} color="#4D4D4D" strokeWidth={1.25} />
            <div className="text-[#4D4D4D] text-xs font-normal leading-none">
              How it works
            </div>
          </div>
        </div>


        <div className="bg-[#F2F2F2]">

                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4" color="#808080" />
                  <Input placeholder="Search" className="pl-8 focus-visible:ring-transparent outline-none focus:outline-none text=[#808080]" />
                </div>
            </div>
      </div>
    </main>
  );
}
