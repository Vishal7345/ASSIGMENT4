function getData(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve ('Data fetched successfully .');

        },2000 );
    });
}

getData().then((result)=>{

    console.log(result);
})