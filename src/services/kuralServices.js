export const BASE_URL = import.meta.env.VITE_TIRUKKURAL_API;

export const getAllKural = async () => {
  const res = await fetch(`${BASE_URL}/kural`);
  console.log("res", res);
  return res.json();
};

export const getKuralById = async (id) => {
  const res = await fetch(`${BASE_URL}/kural/${id}`);
  return res.json();
};

export const getRandomKural = async () => {
  const res = await fetch(`${BASE_URL}/random`);
  return res.json();
};

export const getAllPaal = async () => {
  const res = await fetch(`${BASE_URL}/paal`);
  return res.json();
};

export const getPaalById = async (id) => {
  const res = await fetch(`${BASE_URL}/paal/${id}`);
  return res.json();
};

export const getPaalKurals = async (id) => {
  const res = await fetch(`${BASE_URL}/paal/${id}/all`);
  return res.json();
};

export const getAllAthikaaram = async () => {
  const res = await fetch(`${BASE_URL}/athikaaram`);
  return res.json();
};

export const getAthikaaramById = async (id) => {
  const res = await fetch(`${BASE_URL}/athikaaram/${id}`);
  return res.json();
};

export const getAthikaaramKurals = async (id) => {
  const res = await fetch(`${BASE_URL}/athikaaram/${id}/all`);
  return res.json();
};
