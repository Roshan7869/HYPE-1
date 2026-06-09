'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { AuctionFilter } from '@/types/auction';
import { mockCategories } from '@/lib/mock-data';
import { Sliders, X } from 'lucide-react';

interface FilterBarProps {
  onFiltersChange: (filters: AuctionFilter) => void;
}

export function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState<'live' | 'upcoming' | 'ended' | undefined>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<number | undefined>();
  const [priceMax, setPriceMax] = useState<number | undefined>();

  const handleFilterChange = () => {
    onFiltersChange({
      searchQuery: searchQuery || undefined,
      status,
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      priceMin,
      priceMax,
    });
  };

  const toggleCategory = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    setTimeout(handleFilterChange, 0);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setStatus(undefined);
    setSelectedCategories([]);
    setPriceMin(undefined);
    setPriceMax(undefined);
    onFiltersChange({});
  };

  const hasActiveFilters = searchQuery || status || selectedCategories.length > 0 || priceMin || priceMax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      {/* Desktop Filter Bar */}
      <div className="hidden lg:block">
        <div className="glass rounded-hype-lg p-6 space-y-4">
          {/* Search */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Search
            </label>
            <Input
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setTimeout(handleFilterChange, 0);
              }}
              className="bg-background border-border"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Status
            </label>
            <div className="flex gap-2 flex-wrap">
              {['live', 'upcoming', 'ended'].map((s) => (
                <Button
                  key={s}
                  variant={status === s ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setStatus(status === s ? undefined : (s as any));
                    setTimeout(handleFilterChange, 0);
                  }}
                  className={status === s ? 'bg-hype-accent text-hype-cream' : ''}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Categories
            </label>
            <div className="flex gap-2 flex-wrap">
              {mockCategories.slice(0, 6).map((cat) => (
                <Badge
                  key={cat}
                  variant={selectedCategories.includes(cat) ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => toggleCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Min Price
              </label>
              <Input
                type="number"
                placeholder="0"
                value={priceMin ?? ''}
                onChange={(e) => {
                  setPriceMin(e.target.value ? parseInt(e.target.value) : undefined);
                  setTimeout(handleFilterChange, 0);
                }}
                className="bg-background border-border"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Max Price
              </label>
              <Input
                type="number"
                placeholder="10000"
                value={priceMax ?? ''}
                onChange={(e) => {
                  setPriceMax(e.target.value ? parseInt(e.target.value) : undefined);
                  setTimeout(handleFilterChange, 0);
                }}
                className="bg-background border-border"
              />
            </div>
          </div>

          {/* Clear Button */}
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="w-full"
            >
              Clear All Filters
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Sliders className="w-4 h-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] sm:w-[350px]">
            <div className="space-y-6 pt-6">
              {/* Mobile Search */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Search
                </label>
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setTimeout(handleFilterChange, 0);
                  }}
                />
              </div>

              {/* Mobile Status */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Status
                </label>
                <div className="flex flex-col gap-2">
                  {['live', 'upcoming', 'ended'].map((s) => (
                    <Button
                      key={s}
                      variant={status === s ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => {
                        setStatus(status === s ? undefined : (s as any));
                        setTimeout(handleFilterChange, 0);
                      }}
                      className={status === s ? 'bg-hype-accent text-hype-cream' : ''}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mobile Categories */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Categories
                </label>
                <div className="space-y-2">
                  {mockCategories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="rounded"
                      />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Button */}
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full"
                >
                  Clear All
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
}
