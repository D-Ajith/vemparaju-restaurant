import { ArrowLeft, ShoppingCart, Clock, Star, Heart } from "lucide-react";
import ItemCard from "./ItemCard";

const ItemDetail = ({ item, onBack, recentlyViewed, onOpenItem }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF5E6]">
      <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
        <div className="absolute top-3 sm:top-4 left-4 right-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#FFF5E6]/95 backdrop-blur-sm flex items-center justify-center text-[#4A0E0F] shadow-lg hover:shadow-xl hover:bg-white transition-all hover:scale-110"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4A0E0F]">
              {item.name}
            </h2>
            <p className="mt-2 font-extrabold text-[#4A0E0F] text-base sm:text-lg md:text-xl flex items-baseline gap-1">
              <span className="text-[#E2B351] text-lg sm:text-xl">₹</span>
              <span>{item.price}</span>
            </p>
          </div>
          <div className="flex flex-col items-end text-xs sm:text-sm text-[#7A1E21] gap-1.5">
            <span className="flex items-center gap-1 bg-[#F9E1B5] px-2.5 py-1.5 rounded-full border border-[#E2B351]/60">
              <Clock size={14} className="text-[#7A1E21]" />
              <span className="font-semibold">{item.timeMinutes} min</span>
            </span>
            <span className="flex items-center gap-1 bg-[#FFF0C2] px-2.5 py-1.5 rounded-full border border-[#E2B351]">
              <Star size={14} className="fill-[#E2B351] text-[#E2B351]" />
              <span className="font-semibold text-[#7A1E21]">
                {item.rating}
              </span>
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#6B4B37]">
          {item.description}
        </p>

        {recentlyViewed.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <h3 className="text-sm sm:text-base font-bold text-[#4A0E0F] mb-3 sm:mb-4">
              Recently Viewed
            </h3>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {recentlyViewed.map((rv) => (
                <div
                  key={rv.id}
                  className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
                >
                  <ItemCard item={rv} onClick={() => onOpenItem(rv)} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
