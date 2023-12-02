import { FetchDrugStoresParams } from "../types";

export async function fetchDrugStores(apiParams:FetchDrugStoresParams) {

    const { selectedFilter, searchedText, lat, lng } = apiParams;
    const response = await fetch(`votre_url_de_l_api?filter=${selectedFilter}&search=${searchedText}&lat=${lat}&lng=${lng}`);
    if (!response.ok) {
      throw new Error("Échec de la requête à l'API");
    }
    return response.json();
  }