export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        <h1>Docs page </h1>
        <p>slug: {slug.join("/")}</p>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h1>Docs page </h1>
        <p>slug: {slug}</p>
      </div>
    );
  }
  return <h1>Docs home page !</h1>;
}
