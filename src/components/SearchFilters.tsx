import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  search: string; onSearch: (v: string) => void;
  category: string; onCategory: (v: string) => void;
  location: string; onLocation: (v: string) => void;
  categories: string[]; locations: string[];
};

export const SearchFilters = ({ search, onSearch, category, onCategory, location, onLocation, categories, locations }: Props) => {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Input placeholder="Search by name" value={search} onChange={(e) => onSearch(e.target.value)} />
      <Select value={category} onValueChange={onCategory}>
        <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={location} onValueChange={onLocation}>
        <SelectTrigger><SelectValue placeholder="Location" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
};
