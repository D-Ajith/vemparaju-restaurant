import { useState } from "react";
import {
  Search,
  Circle,
  Heart,
  FileText,
  User,
} from "lucide-react";
import ItemCard from "./ItemCard";

const MenuScreen = ({
  categories,
  allItemsByCategory,
  allItems,
  onOpenItem,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const itemsToShow = (selectedCategory === "All"
    ? allItems
    : allItemsByCategory[selectedCategory] || []
  ).filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF5E6] relative">
      <div className="sticky top-0 z-20 bg-[#8A1B1F] text-white shadow-md">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/vemparaju.png"
                alt="Vemparaju Gari Vantillu"
                className="h-7 sm:h-9 md:h-11 object-contain drop-shadow"
              />

              <span className="text-sm sm:text-lg md:text-xl font-semibold text-[#FFE9B8]">
                Menu
              </span>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 sm:w-5 sm:h-5 text-[#F4DDB0]" />
            <input
              type="text"
              placeholder="Search for dishes..."
              className="w-full rounded-2xl bg-[#FFF5E6] border border-[#E2B351]/60 py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 text-sm sm:text-base text-[#4A0E0F] outline-none focus:ring-2 focus:ring-[#E2B351] focus:border-transparent shadow-sm transition-all placeholder:text-[#C29F77]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-[#7A1E21] px-4 sm:px-6 pt-2 pb-3 overflow-x-auto border-t border-[#E2B351]/40">
          <div className="flex gap-4 sm:gap-6 min-w-max sm:min-w-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pb-2 text-sm sm:text-base whitespace-nowrap border-b-2 transition-all ${
                  selectedCategory === cat
                    ? "border-[#E2B351] text-[#FFE9B8] font-bold scale-105"
                    : "border-transparent text-[#F4DDB0]/80 hover:text-[#FFE9B8] hover:border-[#E2B351]/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 sm:px-5 py-4 bg-[#FFF5E6] pb-20">
        {itemsToShow.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-12">
            <Search className="w-12 h-12 sm:w-16 sm:h-16 text-[#D9B98A] mb-3" />
            <p className="text-center text-[#7A1E21] text-sm sm:text-base font-medium">
              No items found.
            </p>
            <p className="text-center text-[#A1785A] text-xs sm:text-sm mt-1">
              Try adjusting your search or category
            </p>
          </div>
        ) : (
          <div
            className="
              grid gap-3 sm:gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {itemsToShow.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onClick={() => onOpenItem(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuScreen;
