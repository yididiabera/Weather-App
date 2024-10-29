const apiKey = "a3f64408ac15e8a0e998be8e8100a4e6";

async function fetchData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  try {
    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log("Erro fetching data", err);
  }
}

async function processData(data) {
  if (!data) {
    throw new Error("an error");
  }
}
fetchData("london");
