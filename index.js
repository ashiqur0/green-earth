
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
        h2.innerHTML = `<h2 class="py-2 pl-3 hover:bg-green-600 hover:text-white font-medium rounded-lg">${category['category_name']}</h2>`
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
    allPlants.forEach(plant => {
        const allTreeCard = document.getElementById('tree-card-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex flex-col items-start bg-white rounded-xl">
            <div class="rounded-xl w-full h-50 md:h-40 overflow-hidden">
                <img src='${plant.image}' alt="">
            </div>
            <div class='p-4'>
                <h3 class="font-semibold mt-3">${plant.name}</h3>
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
        console.log(plant);
    });
};
