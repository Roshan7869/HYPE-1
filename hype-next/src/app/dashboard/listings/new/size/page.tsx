"use client";

import { useState } from "react";
import { ChevronLeft, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SIZES = [
  ["5", null],
  ["5.5", "₹5,700"],
  ["6", "₹5,350"],
  ["6.5", "₹5,350"],
  ["7", "₹950"],
  ["7.5", "₹4,300"],
  ["8", "₹5,900"],
  ["8.5", "₹7,100"],
  ["9", "₹6,700"],
  ["9.5", "₹5,900"],
  ["10", null],
  ["10.5", null],
  ["11", null],
  ["11.5", null],
  ["12", null],
  ["12.5", null],
  ["13", null],
  ["14", null],
] as const;

const SIZE_TABS = ["US W", "US M", "UK", "CM", "KR", "EU"];

export default function CreateListingSizePage() {
  const [tab, setTab] = useState("US W");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-sand">
      <div className="border-b border-line-soft bg-white">
        <div className="wrap flex items-center gap-2.5 py-5 text-[15px] font-semibold">
          <Link href="/dashboard/listings/new/details" className="flex items-center gap-2.5">
            <ArrowLeft className="h-4 w-4" />
            <span>Create listing</span>
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-medium text-muted">Nike Shox Z Calistra</span>
        </div>
      </div>

      <div className="wrap grid grid-cols-1 items-start gap-14 py-12 pb-[70px] lg:grid-cols-2">
        <div>
          <h1 className="mb-7 font-disp text-[42px] font-extrabold leading-[1.04] tracking-tighter2">
            Nike Shox Z Calistra
            <br />
            Pale Ivory Oatmeal (Women&apos;s)
          </h1>
          <div className="flex aspect-[1/0.92] items-center justify-center rounded-[18px] bg-[linear-gradient(150deg,#dfe3e8,#c2b9ac)] font-disp text-[16px] font-bold text-black/30">
            Nike Shox Z Calistra
          </div>
        </div>

        <div>
          <h2 className="mb-5.5 font-disp text-[34px] font-extrabold tracking-[-0.01em]">
            Select Size
          </h2>
          <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <span className="text-[15px] text-muted">Highest Bids</span>
            {SIZE_TABS.map((s) => (
              <button
                key={s}
                onClick={() => setTab(s)}
                className={cn(
                  "rounded-full px-[22px] py-2.5 text-[14px] font-semibold",
                  tab === s ? "bg-ink text-white" : "bg-[#e4dccd] text-muted",
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
            {SIZES.map(([s, p]) => {
              const isSelected = selected === s;
              return (
                <button
                  key={s}
                  onClick={() => setSelected(s)}
                  className={cn(
                    "rounded-[12px] border-[1.5px] border-transparent bg-cream p-5 text-center transition-colors hover:border-ink",
                    isSelected && "border-ink",
                  )}
                >
                  <b className="mb-1.5 block text-[16px] font-bold">US W {s}</b>
                  {p ? (
                    <span className="text-[14px] font-semibold text-hype-green-ink">{p}</span>
                  ) : (
                    <span className="text-[14px] text-muted-2">Ask</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="col-span-full mt-12 flex items-center justify-between">
            <Button variant="outline" size="lg">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            <Button size="lg">Next step →</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
