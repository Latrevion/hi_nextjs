import { notFound } from "next/navigation";
export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productsId: string; reviewsId: string }>;
}) {
  const { productsId, reviewsId } = await params;
  if (parseInt(reviewsId) > 100) {
    return notFound();
  }

  return (
    <div>
      <h1>Details</h1>
      <h2>ProductId:{productsId}</h2>
      <h2>ReviewId:{reviewsId}</h2>
    </div>
  );
}
