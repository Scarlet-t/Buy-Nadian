// tests/api/helpers.js
export async function fetchPaginated(request, endpoint) {
  let allItems = [];
  let page = 1;

  while (true) {
    const response = await request.get(endpoint, {
      params: { page },
    });
    const { items } = await response.json();
    if (!items.length) break;
    allItems.push(...items);
    page++;
  }

  return allItems;
}
