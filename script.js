const cardloop = document.getElementsByClassName("card-loop");
const image = document.getElementsByClassName("image");
const names = document.getElementsByClassName("name");
const id = document.getElementsByClassName("id");
const flim = document.getElementsByClassName("flim");
const tv = document.getElementsByClassName("tv-show");
const create = document.getElementsByClassName("create");

const data = fetch("https://api.disneyapi.dev/character")
  .then((data) => data.json())
  .then((ele) => {
    const tempData = ele.data;
    console.log("tempData", tempData);
    for (let i = 0; i < tempData.length; i++) {
      image[i].src = `${tempData[i].imageUrl}`;
      names[i].innerText = `Name: ${tempData[i].name}`;
      id[i].innerText = `ID: ${tempData[i]._id}`;
      flim[i].innerText = `Flim: ${tempData[i].films}`;
      tv[i].innerText = `TV Shows: ${tempData[i].tvShows[i]}`;
      create[i].innerText = `CreatedAt: ${tempData[i].createdAt}`;
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
