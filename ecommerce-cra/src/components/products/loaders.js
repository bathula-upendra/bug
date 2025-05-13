export async function productLoader({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Response("Product getting fail", { status: "404" });
  return res.json();
}
