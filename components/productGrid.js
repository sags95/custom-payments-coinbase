
import ProductCard from "./productCard"
import { fetchProducts } from "@/utils/fetchProducts"

export default async function ProductGrid({ categoryId, limit }) {
  const { products, category } = await fetchProducts(categoryId, limit);

  const renderProducts = products.map((item, index) => {
    const productImg = item.images && item.images[0] && item.images[0].file.url
      ? item.images[0].file.url
      : 'https://via.placeholder.com/400x400';

    return (
      <ProductCard
        key={index}
        productName={item.name}
        productPrice={item.price}
        productImg={productImg}
        productId={item.id}
      />
    );
  });



  if (products) {
    return (
      <>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <p className="lg:text-2xl sm:text-base font-bold">{category.name ?? ''}</p>
          <div className="lg:grid lg:grid-cols-4 lg:gap-4 sm:col-auto sm:my-4 sm:gap-y-8">
            {renderProducts}
          </div>
        </div>
      </>
    )
  } else {
    <></>
  }

}