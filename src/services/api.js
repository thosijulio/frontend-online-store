export async function getCategories () {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((result) => result.json())
    .then((data) => data);

  return result;
}

export async function getProductsFromCategoryAndQuery (categoryId, query) {
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((result) => result.json())
    .then((data) => data);
  return products;
}
