"use client";
import { Button } from "@/components/Button";
import { SelectComponent } from "@/components/Input";
import { getMakes } from "@/request/api/getMakes";
import { useEffect, useState } from "react";
interface Make {
  MakeId: number;
  MakeName: string;
}
export default function Home() {
  const [makes, setMakes] = useState<Make[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    new Array(currentYear - 2014),
    (val, index) => 2015 + index
  );
  const disabledButton = !selectedMake || !selectedYear;
  useEffect(() => {
    getMakes()
      .then((data) => setMakes(data))
      .catch((error) => console.error("Error fetching makes:", error));
  }, []);
  return (
    <div className="flex flex-col gap-6 container mx-auto p-10 px-20 bg-slate-900 rounded-2xl">
      <h1 className="text-2xl font-bold text-center ">Car Dealer App</h1>
      <SelectComponent
        selectValue={selectedMake}
        textLabel="Vehicle Make"
        options={makes.map((make) => ({
          value: make.MakeId,
          label: make.MakeName,
        }))}
        onChange={(value) => {
          setSelectedMake(value);
        }}
      />
      <SelectComponent
        selectValue={selectedYear}
        textLabel="Model Year"
        options={years.map((year) => ({ value: year, label: year.toString() }))}
        onChange={(value) => setSelectedYear(value)}
      />
      <div className="flex w-full justify-center">
        <Button
          href={`/result/${selectedMake}/${selectedYear}`}
          disabled={disabledButton}
          textButton="Search"
        />
      </div>
    </div>
  );
}
