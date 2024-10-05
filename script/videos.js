// second to hour and minute function
function secToHour(time){
    const min = time/60;
    if(min<60){
        const minute = Math.trunc(min);
        const sec = time - (minute * 60);
        return times = minute + " min " + sec + " sec ago";
    }else if(min >= 60){
        const hour = Math.trunc(min/60);
        const mins = min - (hour * 60);
        const minute = Math.trunc(mins);
        const sec = (time -((minute * 60)+ (hour * 3600)));
        return times = hour + ' Hours ' + minute + ' minutes ' + sec + ' sec ago';
    }
}
// removing active class from all button
function removeActiveClass(){
    const buttons = document.getElementsByClassName('category-btn');
    for(let btn of buttons){
        btn.classList.remove('active');
    }
}
// load category videos
function categoryVideos(id){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            // removing active class from all button
            removeActiveClass();
            // adding active class to the active btn
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add('active');
            displayVideos(data.category);
        })
        .catch(error => console.log(error));
}
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
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = 
        `<button id="btn-${item.category_id}" onclick="categoryVideos(${item.category_id})" class = 'btn category-btn'>
        ${item.category}
        </button>
        `
        //add button
        categorySection.appendChild(buttonContainer);
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
       videoSection.innerHTML = '';
       if(videos.length == 0){
        videoSection.classList.remove("grid");
        videoSection.innerHTML = 
        `<div class = 'flex flex-col justify-center items-center mt-24'> 
            <div>
                <img src = "asset/Icon.png" alt = "no video message">
            </div>
            <div>
                <p class='text-3xl font-bold w-[350px] text-center'>
               Oops!! sorry, There is no content here
            </p>
            </div>
        </div>`;
        return;
       }else{
        videoSection.classList.add("grid");
       }
       videos.forEach(video => {
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML =   
        `<figure class="h-[200px] relative">
           <img
           src=${video.thumbnail}
           alt="Thumbnail" class="h-full w-full object-cover"/>
           ${
            video.others.posted_date?.length == 0 ? '':`<span class="text-xs text-white bg-black rounded-md px-1 absolute right-2 bottom-2">${secToHour(video.others.posted_date)}</span>`
           }
           
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
                video.authors[0].verified? `<img class="h-[20px] w-[20px]" src="asset/verified.png">`:''
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