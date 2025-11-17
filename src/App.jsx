import { useMemo, useState } from "react";
import menuJson from "./item.json";
import MenuScreen from "./components/MenuScreen";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const { categories, allItemsByCategory, allItems } = useMemo(() => {
    const categories = ["All", ...menuJson.menu.map((c) => c.category)];
    const allItemsByCategory = {};
    const allItems = [];

    menuJson.menu.forEach((cat) => {
      allItemsByCategory[cat.category] = cat.items;
      allItems.push(...cat.items);
    });

    return { categories, allItemsByCategory, allItems };
  }, []);

  const handleOpenItem = (item) => {
    setSelectedItem(item);
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id);
      return [item, ...filtered].slice(0, 10);
    });
  };

  const handleBackToMenu = () => setSelectedItem(null);

  return (
    <div className="min-h-screen w-full bg-[#FFF5E6]">
      {selectedItem ? (
        <ItemDetail
          item={selectedItem}
          onBack={handleBackToMenu}
          recentlyViewed={recentlyViewed.filter(
            (i) => i.id !== selectedItem.id
          )}
          onOpenItem={handleOpenItem}
        />
      ) : (
        <MenuScreen
          categories={categories}
          allItemsByCategory={allItemsByCategory}
          allItems={allItems}
          onOpenItem={handleOpenItem}
        />
      )}
    </div>
  );
}

export default App;
