let url = "https://restcountries.com/v3.1/name/${countryName}?fullText=true";
let search = document.getElementById("search");
let country = document.getElementById("cont");
let flag = document.getElementById("flag");
let capital = document.getElementById("capital");
let currency = document.getElementById("currency");
let continent = document.getElementById("continent");
let alt = document.getElementById("alt");
let un = document.getElementById("un");
let name = document.getElementById("name");
let timezone = document.getElementById("timezone");
let population = document.getElementById("population");
let error = document.getElementById("error");

search.onclick = async () => {
  const get_data = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country.value}?fullText=true`
      );
      const data = await response.json();

      flag.innerHTML = `
            <img src="${data[0].flags.png}" alt="Flag">
                    <p id="name">${search.value}</p>
            `;
      capital.innerText = `Capital - ${data[0].capital[0]}`;
      currency.innerText = `Currency - ${
        data[0].currencies[Object.keys(data[0].currencies)].name
      } - ${Object.keys(data[0].currencies)[0]}`;
      continent.innerText = `Continent - ${data[0].continents[0]}`;
      alt.innerText = `Alt name - ${data[0].altSpellings[0]}`;
      if (data[0].unMember == true) {
        un.innerText = "United Nations Member - Yes";
      } else {
        un.innerText = "United Nations Member - No";
      }

      timezone.innerText = `Timezone - ${data[0].timezones[0]}`;
      population.innerText = `Population - ${data[0].population} peoples`;
    } catch (err) {
      error.innerText = `Country not found. Kindly check your spelling!`;
      setTimeout(() => {
        error.innerText = "";
      }, 4000);
      return;
    }

    // console.log(data[0])
  };

  get_data();
};
