const space_id = 'h5o3sde0kdje';
const environment_id = 'master';
const access_token = 'OE3yBQhdbVMP-aMTORuJw63yv-fxDRBdAyUx8lrxOrw';

export const fetchProducts = () =>
  fetch(
    `https://cdn.contentful.com/spaces/${space_id}/` +
      `environments/${environment_id}/` +
      `entries?access_token=${access_token}`,
  ).then((res) => res.json());

export const fetchProduct = (id) =>
  fetch(
    `https://cdn.contentful.com/spaces/${space_id}/` +
      `environments/${environment_id}/` +
      `/entries/${id}?access_token=${access_token}`,
  ).then((res) => res.json());
