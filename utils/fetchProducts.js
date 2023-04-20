import swell from './swellClient';

export async function fetchProducts(categoryId, limit) {
    const options = {
      ...(limit && {limit: limit}),
      ...(categoryId && { category: categoryId }),
    };
  
    const res = await swell.products.list(options);
    const products = res.results;
  
    const category = categoryId ? await swell.categories.get(categoryId) : null;
  
    return { products, category };
  }