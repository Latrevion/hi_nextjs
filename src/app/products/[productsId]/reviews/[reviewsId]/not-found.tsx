"use client";

import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathName = usePathname();
  const productsId = pathName.split("/")[2];
  const reviewsId = pathName.split("/")[4];

  return (
    <div>
      <h1>
        ProductId {productsId} reviewsId {reviewsId} is not found
      </h1>
    </div>
  );
}
