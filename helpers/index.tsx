import { PlatesProps } from "@/@types";

export const sortedPlatesByLatest = (data: PlatesProps) => {
  const sortedItems = Object.entries(data).sort((a: any, b: any) => {
    const createdAtA = a.createdAt.getTime();
    const createdAtB = b.createdAt.getTime();

    return createdAtB - createdAtA;
  });

  return sortedItems;
};
