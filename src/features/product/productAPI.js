export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/products');
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  return new Promise(async (resolve) => {
    let queryString = '';
    for (let key in filter) {
      queryString += `${key}=${filter[key]}&`;
    }

    const response = await fetch(
      'http://localhost:8000/products?' + queryString
    );
    const data = await response.json();

    resolve({ data });
   
  });
}
