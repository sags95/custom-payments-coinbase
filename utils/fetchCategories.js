import swell from './swellClient'

export async function fetchCategories(limit, page){
    const options = {
        ...(limit && {limit: limit}),
        ...(page && {page: page})
    }

    const res = await swell.categories.list(options);
    const categories = res.results;

    return categories
}