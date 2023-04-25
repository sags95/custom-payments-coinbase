import CategoryGrid from '@/components/categoryGrid'
import ProductGrid from '@/components/productGrid'


export default function Home() {
  return (
    <>
    <CategoryGrid/>
    <ProductGrid categoryId={'coffee'} limit={4}/>
    </>
  )
}
