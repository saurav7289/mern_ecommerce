export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/products');
    const data = await response.json();
    resolve({ data });
  });
}


export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/brands');
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/category');
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category": ['smartphones, "laptops"]}
  //sort = {_sort:"price",_order="desc"}
  //pagination = {_page:1,_limit=10}

    let queryString = '';
    for (let key in filter) {
      const categoryValues = filter[key];
      if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`;
  };

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
    return new Promise(async (resolve) => {
    const response = await fetch(
      'http://localhost:8000/products?' + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count');
    resolve({ data:{products:data, totalItems:+totalItems} });
   
  });
}




export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/products/'+id);
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}

