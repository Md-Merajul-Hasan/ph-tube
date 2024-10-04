// fetch, load and show in html

// create load categories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error));
};

// create display categories
const displayCategories = (categories) => {
    const categorySection = document.getElementById('categories');
    categories.forEach( item => {
        // create button
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        //add button
        categorySection.appendChild(button);
    });
};
loadCategories();
// load videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => console.log(data.videos))
        .catch(error => console.log(error));
};
// display videos
const displayVideos = videos => {
    
}
loadVideos();