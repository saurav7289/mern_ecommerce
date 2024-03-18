
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8000/orders/?user.id='+userId)
    const data = response.json()
    resolve({data})
  }
  );
}
