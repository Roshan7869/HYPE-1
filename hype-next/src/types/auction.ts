export type AuctionStatus = "live" | "upcoming" | "sold" | "ended";

export type AuctionCategory = "Sneakers" | "Streetwear" | "Accessories" | "Collectibles";

export interface Auction {
  id: string;
  name: string;
  brand: string;
  category: AuctionCategory;
  size: string;
  condition: "DS" | "VNDS" | "Used";
  status: AuctionStatus;
  currentBid: number; // INR
  minIncrement: number;
  endsIn: number; // seconds
  watchers: number;
  image: string; // emoji or url
  imageHue: string; // tailwind bg color class
  verified: boolean;
  topBidder?: string;
  seller: string;
}
