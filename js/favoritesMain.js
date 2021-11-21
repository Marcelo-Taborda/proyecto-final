var localFavorites = localStorage.getItem('favorites').split(",");
var localFavoritesNames = localStorage.getItem('favoritesNames').split(",");
const galery = document.querySelector(".galery");

const createFavorites = (link, name) => {
    imageCard = `<div class="images" loading="lazy">
        <img src="${link}" alt="${name}">
        <div class="characterName">
            <span>${name}</span>
            <div class="loveIcon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-9x"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" class=""></path></svg>
            </div>
        </div>
    </div>`;
    return imageCard;
}

for (let a = 0; a < localFavorites.length; a++) {
    const link = localFavorites[a];
    const name = localFavoritesNames[a];
    galery.innerHTML += createFavorites(link, name);
}

const favLoveIcon = document.querySelectorAll(".loveIcon");
favLoveIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.parentNode.parentNode.remove();
    })
})