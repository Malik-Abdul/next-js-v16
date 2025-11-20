import Link from "next/link";
import { Fragment } from "react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  console.log("productId", productId);

  return (
    <Fragment>
      <div>
        Product Detail of {productId} <br />
        <Link href="/next-js/products">Back to Products</Link>
      </div>
    </Fragment>
  );
}
