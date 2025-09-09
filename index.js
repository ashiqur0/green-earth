
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
}