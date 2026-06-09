"use client";

import { ChevronRight, Box, Palette, Calendar, Tag } from "lucide-react";
import { ListingStepper, BackLink } from "@/components/dashboard/listing-stepper";

const OPTIONS = [
  { icon: Box, title: "Size", desc: "Select the size of your item", optional: false },
  { icon: Palette, title: "Colorway", desc: "Select the color or colorway", optional: false },
  { icon: Calendar, title: "Year of Release", desc: "Select the year of release", optional: false },
  { icon: Tag, title: "Style / SKU", desc: "Select the style or SKU if available", optional: true },
];

export default function CreateListingDetailsPage() {
  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          List Your Next Drop
        </h1>
        <p className="mt-2 text-[18px] text-muted">Start by searching the product you want to sell.</p>
      </div>

      <BackLink href="/dashboard/listings/new">Back</BackLink>

      <ListingStepper
        steps={[
          { label: "Product", done: true },
          { label: "Details", current: true },
          { label: "Condition" },
          { label: "Photos" },
          { label: "Pricing" },
          { label: "Review" },
        ]}
      />

      <div className="grid grid-cols-1 gap-[30px] rounded-hype-lg bg-cream p-9 lg:grid-cols-[1fr_290px]">
        <div>
          <div className="mb-6 flex items-start gap-4">
            <div className="mt-0.5 flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-ink font-disp text-[15px] font-extrabold text-white">
              2
            </div>
            <div>
              <h2 className="font-disp text-[24px] font-extrabold leading-tight tracking-tighter2">
                Select Product Details
              </h2>
              <p className="mt-1 text-[15px] text-muted">
                Choose the option that best matches your item.
              </p>
            </div>
          </div>

          {OPTIONS.map((o) => {
            const Icon = o.icon;
            return (
              <a
                key={o.title}
                href="/dashboard/listings/new/size"
                className="mb-3.5 flex cursor-pointer items-center gap-[18px] rounded-[14px] border border-line-soft bg-white p-5 transition-colors hover:border-ink"
              >
                <span className="flex w-[30px] flex-none justify-center">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div className="flex-1">
                  <b className="text-[16px] font-bold">
                    {o.title}{" "}
                    {o.optional && (
                      <span className="ml-1 font-medium text-muted-2">(Optional)</span>
                    )}
                  </b>
                  <div className="text-[14px] text-muted">{o.desc}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-[#b8afa0]" strokeWidth={2.5} />
              </a>
            );
          })}

          <div className="mt-7.5 flex items-center justify-between">
            <a
              href="/dashboard/listings/new"
              className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-7 text-[14px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Back
            </a>
            <div className="flex items-center gap-2">
              <a
                href="/dashboard/listings"
                className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-6 text-[14px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Save as Draft
              </a>
              <a
                href="/dashboard/listings/new/size"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white transition-colors hover:bg-black"
              >
                Next step
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <aside className="self-start rounded-[16px] border border-line-soft bg-[#e9e1d4] p-5">
          <div className="mb-3 flex items-center gap-2.5 text-[15px] font-bold">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
              i
            </span>
            Why this matters
          </div>
          <p className="text-[14px] leading-[1.5] text-[#6f6a60]">
            Accurate product details help HYPE authenticate your item faster and increase buyer
            trust. Items with complete information sell 2.3x faster on average.
          </p>
        </aside>
      </div>
    </div>
  );
}
