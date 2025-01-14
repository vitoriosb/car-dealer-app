"use client";
import { Button } from "@/components/Button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getModels } from "../../../../request/api/getModels";

interface Model {
  Model_ID: number;
  Model_Name: string;
}

export default function Result() {
  const { makeId, year } = useParams() as { makeId: string; year: string };
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    if (makeId && year) {
      getModels(makeId, year)
        .then((data) => setModels(data))
        .catch((error) => console.error("Error fetching models:", error));
    }
  }, [makeId, year]);

  return (
    <div className="flex flex-col gap-6 container mx-auto p-10 px-20 bg-slate-900 rounded-2xl">
      <div className="flex w-full justify-end">
        <Button href={"/"} disabled={false} textButton="return" />
      </div>
      <h1 className="text-2xl font-bold text-center">Vehicle Models</h1>
      {models.length > 0 ? (
        <ul>
          {models.map((model, index) => (
            <li
              key={`${model.Model_ID}-${index}`}
              className="mb-4 border-b border-gray-300 pb-2"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No models found for the selected make and year.</p>
      )}
    </div>
  );
}
