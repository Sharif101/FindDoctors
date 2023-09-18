import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Tab from "./Tab/Tab";

export default function FindDoctors() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Searchbar search={search} />
      <Tab search={search} setSearch={setSearch} />
    </div>
  );
}
