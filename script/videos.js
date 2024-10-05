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
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error));
};
// display videos
const displayVideos = videos => {
       const videoSection = document.getElementById('videos');
       videos.forEach(video => {
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML =   
        `<figure class="h-[200px] relative">
           <img
           src=${video.thumbnail}
           alt="Thumbnail" class="h-full w-full object-cover"/>
           <span class="text-white bg-black rounded-md px-1 absolute right-2 bottom-2">${video.others.posted_date}</span>
        </figure>
        <div class="px-0 py-2 flex gap-2">
           <div class = "w-[50px] h-[50px]">
           <img class="h-full w-full rounded-full" src="${video.authors[0].profile_picture}"> 
           </div>
           <div>
           <p class="font-bold text-1xl">${video.title}</p>
           <div class="flex gap-2 items-center">
            <p>${video.authors[0].profile_name}</p>
            ${
                video.authors[0].verified? '<img class="h-[20px] w-[20px]" src="asset/verified.png">':''
            }
           </div>
           <p>${video.others.views}</p>
           </div>
        </div>
        `;
        videoSection.append(card);
       });
};
loadVideos();