export const getAllTrees = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    return data.plants;
}