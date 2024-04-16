import Weather from "./weather";

const citySearchForm = document.querySelector(
  ".city-search-form"
) as HTMLFormElement;

if (citySearchForm) {
  citySearchForm.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();
    const cityInput = citySearchForm.querySelector(".city") as HTMLInputElement;
    const searchResults = citySearchForm.querySelector(
      "search-results"
    ) as HTMLUListElement;
    const city = cityInput.value;
    const weather = Weather.getInstance();
    const locations = await weather.getLocations(city);

    searchResults.innerHTML = "";

    if (!locations.length) {
      const li = document.createElement("li");
      li.textContent = "Nessun risultato trovato";
      searchResults.appendChild(li);
      return;
    }
  });
}
