export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productsId: string; reviewsId: string }>;
}) {
  const { productsId, reviewsId } = await params;

  return (
    <div>
      <h1>Details</h1>
      <h2>ProductId:{productsId}</h2>
      <h2>ReviewId:{reviewsId}</h2>
    </div>
  );
}
