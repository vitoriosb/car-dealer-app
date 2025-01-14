import { getMakes } from "../request/api/getMakes";

export async function generateStaticParams() {
  const makes = await getMakes();
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    new Array(currentYear - 2014),
    (val, index) => 2015 + index
  );

  const params: { makeId: string; year: string }[] = [];

  makes.forEach((make) => {
    years.forEach((year) => {
      params.push({ makeId: make.MakeId.toString(), year: year.toString() });
    });
  });

  return params;
}
