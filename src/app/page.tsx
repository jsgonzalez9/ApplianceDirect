import { STATIC_PARTS, getPartByNumber, getCategories } from "@/lib/static-data";
import { SearchBar } from "@/components/SearchBar";
import { QuickFilters } from "@/components/QuickFilters";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-[#333333] bg-[#1a1a1a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Parts<span className="text-[#f96706]">Direct</span>
              </h1>
              <p className="text-sm text-gray-500">Find the best price, fast</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{STATIC_PARTS.length} parts in catalog</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - DISABLED FOR STATIC BUILD */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-[#1e1e1e] border border-[#333333] rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Filters</h3>
              <p className="text-xs text-gray-500">Quick filters coming soon</p>
            </div>
          </aside>

          {/* Catalog Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Parts</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="bg-[#1e1e1e] border border-[#333333] text-white rounded px-3 py-1 text-sm">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Availability</option>
                </select>
              </div>
            </div>

            <CatalogGrid parts={STATIC_PARTS} />
          </div>
        </div>
      </main>
    </div>
  );
}
