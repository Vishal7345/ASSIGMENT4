async function fetchMultipleData(urls){

    const response=await fetch(urls);

    const data=await response.json();
    return data;
}

fetchData('https://jsonplaceholder.typicode.com/todos/1 ').then((data)=>{

    console.log(data);
})

