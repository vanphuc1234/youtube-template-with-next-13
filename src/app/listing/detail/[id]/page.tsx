export default function DetailPage({ params }: { params: { id: number } }) {
  return (
    <>
      <p>Detail page {params.id}</p>
    </>
  );
}
