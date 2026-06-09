"use client";

import { useState } from "react";
import {
  Upload,
  Star,
  GripVertical,
  Camera,
  CheckCircle2,
  Image as ImageIcon,
  Lightbulb,
  Eye,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ListingStepper, BackLink } from "@/components/dashboard/listing-stepper";

interface Photo {
  id: string;
  name: string;
  hue: string;
  isCover: boolean;
  tag?: string;
}

const SEED_PHOTOS: Photo[] = [
  { id: "p1", name: "Front (Hero).jpg", hue: "from-stone-300 to-stone-500", isCover: true, tag: "Hero" },
  { id: "p2", name: "Side profile.jpg", hue: "from-stone-200 to-stone-400", isCover: false, tag: "Side" },
  { id: "p3", name: "Sole.jpg", hue: "from-amber-200 to-amber-400", isCover: false, tag: "Sole" },
  { id: "p4", name: "Size tag.jpg", hue: "from-stone-100 to-stone-300", isCover: false, tag: "Tag" },
];

const TIPS = [
  { title: "Use natural light", desc: "Photograph near a window for the most accurate color." },
  { title: "Plain background", desc: "A clean white or grey surface makes details stand out." },
  { title: "All angles", desc: "Front, back, sides, sole, tags and any flaws must be visible." },
  { title: "Sharp focus", desc: "Blurry photos are the #1 reason for authentication delays." },
];

const SAMPLE_FLOWS = [
  "Front (Hero)",
  "45° Angle",
  "Side – Left",
  "Side – Right",
  "Back / Heel",
  "Top / Toe",
  "Sole",
  "Inside / Lining",
  "Size tag",
  "Box label",
  "Receipt / Proof",
  "Any flaws",
];

export default function CreateListingPhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>(SEED_PHOTOS);

  function setCover(id: string) {
    setPhotos((ps) => ps.map((p) => ({ ...p, isCover: p.id === id })));
  }

  function remove(id: string) {
    setPhotos((ps) => ps.filter((p) => p.id !== id));
  }

  function addPhoto() {
    const newId = `p${Date.now()}`;
    const hues = ["from-stone-300 to-stone-500", "from-rose-200 to-rose-400", "from-sky-200 to-sky-400", "from-emerald-200 to-emerald-400", "from-violet-200 to-violet-400"];
    const hue = hues[Math.floor(Math.random() * hues.length)] ?? "from-stone-300 to-stone-500";
    setPhotos((ps) => [
      ...ps,
      { id: newId, name: `IMG_${ps.length + 1}.jpg`, hue, isCover: false },
    ]);
  }

  const completed = photos.length >= 4;

  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          List Your Next Drop
        </h1>
        <p className="mt-2 text-[18px] text-muted">Start by searching the product you want to sell.</p>
      </div>

      <BackLink href="/dashboard/listings/new/details">Back</BackLink>

      <ListingStepper
        steps={[
          { label: "Product", done: true },
          { label: "Details", done: true },
          { label: "Condition", done: true },
          { label: "Photos", current: true },
          { label: "Pricing" },
          { label: "Review" },
        ]}
      />

      <div className="grid grid-cols-1 gap-[30px] rounded-hype-lg bg-cream p-9 lg:grid-cols-[1fr_290px]">
        <div>
          <div className="mb-6 flex items-start gap-4">
            <div className="mt-0.5 flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-ink font-disp text-[15px] font-extrabold text-white">
              4
            </div>
            <div className="flex-1">
              <h2 className="font-disp text-[24px] font-extrabold leading-tight tracking-tighter2">
                Upload Photos
              </h2>
              <p className="mt-1 text-[15px] text-muted">
                Add at least 4 photos. The first photo will be your cover image.
              </p>
            </div>
            <div
              className={cn(
                "flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[12px] font-bold uppercase tracking-[0.14em]",
                completed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700",
              )}
            >
              {completed ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <ImageIcon className="h-4 w-4" />
              )}
              {photos.length} / 12 photos
            </div>
          </div>

          {/* Drop zone */}
          <label
            htmlFor="photo-upload"
            className="group mb-6 flex h-44 cursor-pointer flex-col items-center justify-center rounded-[18px] border-2 border-dashed border-line bg-white transition-colors hover:border-ink hover:bg-cream-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-2 transition-colors group-hover:bg-ink group-hover:text-white">
              <Upload className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <p className="mt-3 font-disp text-[16px] font-extrabold">
              Drag &amp; drop photos or click to upload
            </p>
            <p className="mt-1 text-[13px] text-muted">
              JPG, PNG, HEIC · up to 12 photos · max 10 MB each
            </p>
            <input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={addPhoto}
              className="hidden"
            />
          </label>

          <button
            onClick={addPhoto}
            className="mb-6 inline-flex h-10 items-center gap-2 rounded-full border border-line bg-white px-4 text-[13px] font-semibold text-ink hover:border-ink"
          >
            <Camera className="h-4 w-4" /> Add sample photo
          </button>

          {/* Photo grid */}
          {photos.length === 0 ? (
            <div className="rounded-[18px] border border-dashed border-line bg-white p-12 text-center">
              <ImageIcon className="mx-auto h-10 w-10 text-muted-2" strokeWidth={1.4} />
              <p className="mt-3 font-disp text-[18px] font-extrabold">No photos uploaded yet</p>
              <p className="mt-1 text-[13px] text-muted">Upload at least 4 photos to continue.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {photos.map((p, i) => (
                <div
                  key={p.id}
                  className={cn(
                    "group relative overflow-hidden rounded-[14px] border bg-gradient-to-br",
                    p.hue,
                    p.isCover ? "border-ink ring-2 ring-ink/20" : "border-line-soft",
                  )}
                >
                  <div className="flex aspect-square items-center justify-center">
                    <span className="px-3 text-center font-disp text-[14px] font-extrabold text-white/85">
                      {p.name.replace(/\.[^.]+$/, "")}
                    </span>
                  </div>

                  {/* Cover badge */}
                  {p.isCover && (
                    <div className="absolute left-2 top-2 flex h-6 items-center gap-1 rounded-full bg-ink px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      <Star className="h-3 w-3" fill="currentColor" /> Cover
                    </div>
                  )}

                  {/* Index */}
                  <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-[10px] font-bold text-white">
                    {i + 1}
                  </div>

                  {/* Hover actions */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1.5 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex items-center gap-1.5 text-white">
                      <GripVertical className="h-4 w-4 cursor-grab" />
                    </div>
                    <div className="flex items-center gap-1">
                      {!p.isCover && (
                        <button
                          onClick={() => setCover(p.id)}
                          className="flex h-7 items-center gap-1 rounded-full bg-white/15 px-2 text-[11px] font-semibold text-white hover:bg-white/25"
                          title="Set as cover"
                        >
                          <Star className="h-3 w-3" /> Cover
                        </button>
                      )}
                      <button
                        onClick={() => remove(p.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white hover:bg-hype-red"
                        title="Remove"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Tag chip */}
                  {p.tag && (
                    <div className="absolute left-2 bottom-2 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-ink">
                      {p.tag}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-7.5 flex items-center justify-between">
            <a
              href="/dashboard/listings/new/condition"
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
                href="/dashboard/listings/new/pricing"
                className={cn(
                  "inline-flex h-12 items-center gap-2 rounded-full px-7 text-[14px] font-bold transition-colors",
                  completed
                    ? "bg-ink text-white hover:bg-black"
                    : "pointer-events-none bg-line text-white",
                )}
              >
                Next: Pricing
              </a>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-[16px] border border-line-soft bg-[#e9e1d4] p-5">
            <div className="mb-3 flex items-center gap-2.5 text-[15px] font-bold">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
                <Lightbulb className="h-3 w-3" />
              </span>
              Photo tips
            </div>
            <ul className="space-y-3 text-[14px] leading-[1.5] text-[#6f6a60]">
              {TIPS.map((t) => (
                <li key={t.title}>
                  <b className="block text-ink">{t.title}</b>
                  <span>{t.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[16px] border border-line-soft bg-white p-5">
            <div className="mb-3 flex items-center gap-2.5 text-[15px] font-bold">
              <Eye className="h-4 w-4" /> Required angles
            </div>
            <ul className="grid grid-cols-2 gap-1.5 text-[12px]">
              {SAMPLE_FLOWS.map((s) => {
                const isDone = photos.some((p) => p.tag === s.split(" ")[0]) || photos.length >= 4;
                return (
                  <li
                    key={s}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2 py-1.5",
                      isDone ? "bg-emerald-50 text-emerald-700" : "bg-cream-2 text-muted",
                    )}
                  >
                    {isDone ? <CheckCircle2 className="h-3 w-3" /> : <div className="h-3 w-3 rounded-full border border-line" />}
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
