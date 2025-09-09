
/** Category Functionality */
const category = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => showCategory(data.categories));
};
category();

const showCategory = (categories) => {
    categories.forEach(category => {
        const categoryContainer = document.getElementById('category-container');
        const h2 = document.createElement('h2');
        h2.innerHTML = `
        <div onclick="plantByCategory(${category.id})" 
            class="py-2 pl-3 hover:bg-green-600 hover:text-white font-medium rounded-lg">        
            <button>${category['category_name']}</button>
        </div>
        `
        categoryContainer.appendChild(h2);
    });
};

/** All Plants Card Functionality */
const allPlant = () => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
        .then(res => res.json())
        .then(data => showPlants(data.plants));
};
allPlant();

const showPlants = (allPlants) => {
    
    const allTreeCard = document.getElementById('tree-card-container');
    allTreeCard.innerText = '';
    
    allPlants.forEach(plant => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-col items-start bg-white rounded-xl">
            <div class="rounded-xl w-full h-50 md:h-40 overflow-hidden">
                <img src='${plant.image}' alt="">
            </div>
            <div class='p-4'>
                <button onclick="plantDetails(${plant.id})"
                    class="font-semibold mt-3">${plant.name}
                </button>
                <p class="text-[.875rem] text-[#1F2937] mt-2 text-justify h-30">${plant.description}</p>
                <div class="flex justify-between items-center mt-2 w-full">
                    <p class="bg-green-200 text-green-600 text-[.875rem] rounded-3xl px-3 py-[2px] ">${plant.category}</p>
                    <p class="font-semibold">৳${plant.price}</p>
                </div>
                <button class="bg-green-600 hover:bg-green-200 hover:text-green-900 text-white rounded-3xl w-full mt-3 py-1.5">Add to Cart</button>
            </div>
        </div>
        `
        allTreeCard.appendChild(div);
        // console.log(plant);
    });
};

/** Category wise Plant card */
const plantByCategory = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPlants(data.plants));
}

/** Plants Details Modal */
const plantDetails = (id) => {
    // console.log(plant);
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.plants));
}
// {
//     "id": 29,
//     "image": "https://i.ibb.co.com/4g4J0Tkj/lotus-min.jpg",
//     "name": "Lotus",
//     "description": "A sacred aquatic plant with beautiful pink or white flowers. Symbolizes purity and grows in still, shallow water.",
//     "category": "Aquatic Plant",
//     "price": 450
// }
const showDetails = (details) => {
    // console.log(details);
    const detailsBox = document.getElementById('details-container');
    detailsBox.innerHTML = `
    <h2 class="text-xl font-semibold mb-4">Mango Tree</h2>

    <div class="h-50 overflow-hidden rounded-md">
        <img src='${details.image}' alt="">
    </div>

    <p class="mt-2"><span class="font-bold">Category: </span>${details.category}</p>
    <p class="mt-2"><span class="font-bold">Price: </span>৳${details.price}</p>
    <p class="mt-2"><span class="font-bold">Description: </span>${details.description}</p>
    `
    document.getElementById('modal').showModal();
}