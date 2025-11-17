const ItemCard = ({ item, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group bg-[#FFF8EC] rounded-3xl overflow-hidden shadow-sm flex flex-col text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#E2B351]/40 hover:border-[#8A1B1F]/60"
    >
      <div className="h-28 sm:h-32 md:h-36 w-full overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-[#4A0E0F] line-clamp-2 group-hover:text-[#8A1B1F] transition-colors">
          {item.name}
        </h3>

        <div className="flex items-center justify-between mt-1 sm:mt-2 text-[11px] sm:text-xs text-[#7A1E21]">
          <span className="flex items-center gap-1 bg-[#FCEEC6] px-2 py-1 rounded-full border border-[#E2B351]/50">
            <span className="text-xs">⏱</span>
            <span className="font-medium">{item.timeMinutes} min</span>
          </span>

          <span className="flex items-center gap-1 bg-[#FFF0C2] px-2 py-1 rounded-full border border-[#E2B351]">
            <span className="text-xs">⭐</span>
            <span className="font-medium text-[#7A1E21]">{item.rating}</span>
          </span>
        </div>

        <div className="mt-2 sm:mt-3 text-sm sm:text-base font-extrabold text-[#4A0E0F] flex items-baseline gap-1">
          <span className="text-[#E2B351] text-base sm:text-lg">₹</span>
          <span>{item.price}</span>
        </div>
      </div>
    </button>
  );
};

export default ItemCard;
