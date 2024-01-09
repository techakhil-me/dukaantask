"use client";

import {
  ChevronDown,
  Globe,
  HelpCircle,
  MessageSquareMore,
  Search,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { ScrollArea } from "./components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import { DataTableDemo } from "./data-table"


export default function Home() {
  return (
    <main className="flex max-h-screen flex-col justify-between">
      {/* top bar */}

      <div className="px-8 py-3 w-full bg-white border-b border-[#D9D9D9] justify-between items-center gap-4 inline-flex">
        <div className="justify-start items-center gap-4 inline-flex flex-1">
          <div className="text-[#1A181E] text-sm font-normal leading-snug">
            Payments
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <HelpCircle size={16} color="#4D4D4D" strokeWidth={1.25} />
            <div className="text-[#4D4D4D] text-xs font-normal leading-none">
              How it works
            </div>
          </div>
        </div>

        <div className="bg-[#F2F2F2] rounded-[6px] flex-1 overflow-hidden">
          <div className="flex items-center px-4  ">
            <Search className="" color="#808080" size={16} />
            <Input
              placeholder="Search features, tutorials, etc."
              className="text-sm  focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none focus:outline-none text-[#808080] placeholder-black/5 bg-transparent border-none active:outline-none"
            />
          </div>
        </div>

        <div className="justify-end items-center gap-4 inline-flex flex-1">
          <Button
            variant="secondary"
            className="flex items-center justify-center bg-[#E6E6E6]
            rounded-full h-10 w-10 p-0"
          >
            <MessageSquareMore size={20} color="#4D4D4D" />
          </Button>
          <Button
            variant="secondary"
            className="flex items-center justify-center bg-[#E6E6E6]
            rounded-full h-10 w-10 p-0"
          >
            <ChevronDown size={20} strokeWidth={3} color="#4D4D4D" />
          </Button>
        </div>
      </div>

      {/* main content */}

      <ScrollArea className="flex flex-col w-full flex-1">
        <div className="flex flex-col w-full flex-1 p-8 gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center gap-5">
            <div className="text-[#1A181E] text-xl font-medium leading-7">
              Overview
            </div>

            <Select>
              <SelectTrigger className="max-w-fit gap-2 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border border-[#D9D9D9]">
                <SelectValue placeholder="Last Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="jan" selected>
                    Last Month
                  </SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  <SelectItem value="mar">March</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <Card className="flex-1 shadow-md border-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">
                  Online orders
                </CardTitle>
                <Globe className="opacity-20" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">231</div>
                <p className="text-xs opacity-60">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="flex-1 shadow-md border-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">
                  Amount received
                </CardTitle>
                <Wallet className="opacity-20" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹23,92,312.19</div>
                <p className="text-xs opacity-60">+20.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          
        </div>


        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center gap-5">
            <div className="text-[#1A181E] text-xl font-medium leading-7">
            Transactions | This Month
            </div>
          </div>

          <div className="flex gap-4">
            <Card className="flex-1 rounded-lg px-4 shadow-md border-none">
              {/* <CardContent> */}
              <DataTableDemo/>
              
              {/* </CardContent> */}
            </Card>
           
          </div>

          
        </div>


        </div>
      </ScrollArea>
    </main>
  );
}
