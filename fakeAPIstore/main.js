//then-catch
// fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => {
//         let output = ''
//         data.forEach(item => output += `<div class='container'><img src=${item.image} alt=${item.id} /><h4>${item.title}</h4></div>`)
//         document.body.innerHTML = output;
//     })
//     .catch(err => console.log(err))

//Async-await
async function fetchItems() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    let output = ''
    data.forEach(item => output += `<div class='container'><img src=${item.image} alt=${item.id} /><h4>${item.title}</h4></div>`)
    document.body.innerHTML = output;
}

fetchItems()
