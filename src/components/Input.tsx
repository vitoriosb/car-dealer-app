"use client";
interface SelectComponentProps {
  selectValue: string | number;
  textLabel: string;
  options: { value: string | number; label: string }[];
  onChange: (value: string) => void;
}

export function SelectComponent({
  selectValue,
  textLabel,
  onChange,
  options,
}: SelectComponentProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2">{textLabel}</label>
      <select
        className="border p-2 w-full rounded-lg bg-slate-700"
        value={selectValue}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Make</option>
        {options.map((options) => (
          <option key={options.value} value={options.value}>
            {options.label}
          </option>
        ))}
      </select>
    </div>
  );
}
