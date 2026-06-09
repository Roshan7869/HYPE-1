export type AuctionStatus = 'live' | 'upcoming' | 'ended';

export interface Auction {
  id: string;
  title: string;
  description: string;
  image: string;
  currentBid: number;
  startingBid: number;
  endTime: Date;
  status: AuctionStatus;
  seller: {
    id: string;
    name: string;
    avatar?: string;
    verified?: boolean;
  };
  totalBids: number;
  category: string;
  featured?: boolean;
  views?: number;
}

export interface AuctionFilter {
  categories?: string[];
  priceMin?: number;
  priceMax?: number;
  status?: AuctionStatus;
  searchQuery?: string;
}
