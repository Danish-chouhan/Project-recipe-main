const apiKey = "2af2eb9c553d22e76b077e37376529f9";
const appId = "902fde71";
const apiEndpoint = "https://api.edamam.com/api/recipes/v2";

const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    getData(query);
});

function getData(query) {
    fetch(`${apiEndpoint}?type=public&q=${query}&app_id=${appId}&app_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        let data1 = data['hits'];
        let recipes = data1.map(hit => {
          let recipe = hit.recipe;
          console.log(recipe);
          return { url : recipe.url, name: recipe.label, photo: recipe.image };
        });

        const main = document.querySelector('.main');
        if (main) main.remove(); // Remove existing results

        const newMain = document.createElement('div');
        newMain.classList.add('main');
        document.body.appendChild(newMain);

        for (let i = 0; i < recipes.length; i++) {
          const recipe = recipes[i];
          const card = document.createElement('div');
          card.classList.add('card');
          newMain.appendChild(card);

          const image = document.createElement('img');
          image.classList.add('image');
          image.src = recipe.photo;
          card.appendChild(image);

          image.addEventListener('click',()=> {
            console.log(recipe.url);
            window.open(recipe.url,'_blank')

          })

          const title = document.createElement('p');
          title.classList.add('title');
          title.textContent = recipe.name;
          card.appendChild(title);
        }
      })
      .catch(error => console.log(error));
}
