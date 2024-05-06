export async function getProductDetails(id: number) {
  const response = await fetch(`http://127.0.0.1:8000/product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getTopSellingInBW() {
  const response = await fetch("http://127.0.0.1:8000/top-selling-in-x", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: "B&W Laser Printer",
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getTopSellingInColor() {
  const response = await fetch("http://127.0.0.1:8000/top-selling-in-x", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: "Color Laser Printer",
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getItemsThatSimilarUsersBought() {
  const response = await fetch("http://127.0.0.1:8000/similar-users-bought", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: "User3",
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getItemsThatSimilarUsersViewed() {
  const response = await fetch("http://127.0.0.1:8000/similar-users-clicked", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: "User3",
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getItemsThatAreBoughtTogether(id: number) {
  const response = await fetch("http://127.0.0.1:8000/items-bought-together", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      itemid: id,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getItemsThatAreSimilarByDescription(id: number) {
  const response = await fetch("http://127.0.0.1:8000/similar-description", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input_list: [id],
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getUserPurchases(userid: string) {
  const response = await fetch("http://127.0.0.1:8000/user-purchases", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: userid,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getUserViewed(userid: string) {
  const response = await fetch("http://127.0.0.1:8000/user-viewed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: userid,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}

export async function getItemsThatSimilarUsersBoughtLocation(location: string) {
  const response = await fetch("http://127.0.0.1:8000/similar-users-location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: "User3",
      location: location,
    }),
  });
  const response_1 = await response.json();
  console.log(response_1);
  return response_1;
}
