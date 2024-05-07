// get individual product details
export async function getProductDetails(id: number) {
  const response = await fetch(`http://127.0.0.1:8000/product/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get the list of top selling products in a category
export async function getTopSelling(category: string) {
  const response = await fetch('http://127.0.0.1:8000/top-selling-in-x', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category: category,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get the items that users similiar to the current user has purchased
export async function getItemsThatSimilarUsersBought() {
  const response = await fetch('http://127.0.0.1:8000/similar-users-bought', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid: 'User3',
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get the list of items that the user has recently viewed or clicked
export async function getItemsThatSimilarUsersViewed() {
  const response = await fetch('http://127.0.0.1:8000/similar-users-clicked', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid: 'User3',
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// items that are frequently bought together with the current product
export async function getItemsThatAreBoughtTogether(id: number) {
  const response = await fetch('http://127.0.0.1:8000/items-bought-together', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      itemid: id,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get list of items that are similar to the current item
export async function getItemsThatAreSimilarByDescription(id: number) {
  const response = await fetch('http://127.0.0.1:8000/similar-description', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input_list: [id],
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get the list of purchases the user has made
export async function getUserPurchases(userid: string) {
  const response = await fetch('http://127.0.0.1:8000/user-purchases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid: userid,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get the list of products that the user has recently viewed
export async function getUserViewed(userid: string) {
  const response = await fetch('http://127.0.0.1:8000/user-viewed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid: userid,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// items that are freqently bought at the user's location by other users
export async function getItemsThatSimilarUsersBoughtLocation(location: string) {
  const response = await fetch('http://127.0.0.1:8000/similar-users-location', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid: 'User3',
      location: location,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

// get list of items based on custom filters that the user has searched
export async function getFilteredData(filters: { [key: string]: string }) {
  const response = await fetch('http://127.0.0.1:8000/knowledge-based', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_type: filters['Type'],
      print_resolution: filters['Print Resolution'],
      page_capacity: filters['Paper Capacity'],
      print_speed: filters['Print Speed'],
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}
