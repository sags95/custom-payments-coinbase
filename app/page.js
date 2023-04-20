import ProductCollectionGrid from '@/components/productCollectionGrid'
import ProductGrid from '@/components/productGrid'


export default function Home() {
  return (
    <>
    <ProductCollectionGrid/>
    <ProductGrid categoryId={'coffee'} limit={4}/>
    </>
  )
}
