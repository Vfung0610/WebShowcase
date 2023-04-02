//Fetch Data From JSON
const fetchData = async (path) => {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

//Paste Data Get From JSON to index.html
const loadDataToPage = async (tmpData) => {
  const data = await tmpData;
  //console.log(data);

  tmpHTML = `<section class="text-center border rounded my-3 bg-white p-4"><h1 class="fs-6">Website Version: ${data.version}</h1><h1 class="fs-6">Website Encoding: ${data.encoding}</h1></section>`;
  for (let i = 0; i < data.users.length; i++) {
    tmp = `<article class="col border rounded me-5 bg-white d-flex align-items-center flex-column justify-content-center text-center p-4"><h1 class="fs-6">ID: ${data.users[i].id}</h1><h1 class="fs-6">Name: ${data.users[i].name}</h1><h1 class="fs-6">Age: ${data.users[i].age}</h1></article>`;

    if (i % 2 == 0) {
      tmpHTML += '<section class="row mb-5">' + tmp;
      if (i == data.users.length - 1) {
        tmpHTML += "</section>";
      }
    } else {
      tmpHTML += tmp + "</section>";
    }
  }
  document.querySelector("main").innerHTML += tmpHTML;
};

loadDataToPage(fetchData("/assets/data/content.json"));
