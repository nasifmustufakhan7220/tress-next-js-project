export const getAllTrees = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/plants", {next : {revalidate: 60}});

    if(!res.ok){
        throw new Error("Something went wrong, sorry!");
    }

    const data = await res.json();
    return data.plants;
}