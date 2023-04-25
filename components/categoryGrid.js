import { fetchCategories } from "@/utils/fetchCategories"
import Image from "next/image"
import Link from "next/link";

export default async function CategoryGrid() {
    const categories = await fetchCategories(3);

    const placeholderImg = "https://via.placeholder.com/500x500?text=No+Image+Available";

    const imgStyle = {
        objectFit: 'cover'
    }

    if (categories) {
        const renderItem = (category, index) => (
            <li key={index}>
                <Link href={`${category.slug}`} className="relative block group">
                    <div className="relative r w-full transition duration-500 aspect-square group-hover:opacity-90">
                        <Image
                            src={category.images?.[0]?.file?.url || placeholderImg}
                            alt={category.name}
                            fill={true}
                            sizes="50vw"
                            style={imgStyle}
                        />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                        <h3 className="text-xl font-medium text-white">{category.name}</h3>

                        <span
                            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                        >
                            Shop Now
                        </span>
                    </div>
                </Link>
            </li>
        );


        return (
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        {categories.length >= 1 && renderItem(categories[0], 0)}
                        {categories.length >= 2 && renderItem(categories[1], 1)}
                        {categories.length >= 3 && (
                            <li
                                key={2}
                                className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                            >
                                <a href={`${categories[2].slug}`} className="relative block group">
                                    <div className="relative w-full object-cover transition duration-500 aspect-square group-hover:opacity-90">
                                        <Image
                                            src={categories[2].images?.[0]?.file?.url || placeholderImg}
                                            alt={categories[2].name}
                                            fill={true}
                                            sizes="100vw"
                                            style={imgStyle}
                                            className="transition duration-500 aspect-square group-hover:opacity-90"
                                        />
                                    </div>

                                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                        <h3 className="text-xl font-medium text-white">
                                            {categories[2].name}
                                        </h3>

                                        <span
                                            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                        >
                                            Shop Now
                                        </span>
                                    </div>
                                </a>
                            </li>
                        )}

                    </ul>
                </div>
            </section>
        )
    } else {
        return <></>
    }

}