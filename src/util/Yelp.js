const apiKey = '_DxBmxRpLu5V_qg1umQ2lXOnpogMmnG24Kbg-neyL07wJpWkSLnRDoz5e23FY5Gv55XffLvO5dJxdz8oVYwYKUBrO4HjK5mNMuuXSc1P_H1H92NkRd--EWeoYaYvW3Yx';

const Yelp = {
  search (term, location, sortBy) {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?t=${term}&location=${location}&sort_by=${sortBy}',
{  headers: {
    Authorization: `Bearer ${apiKey}`
  }
}).then(response => {
  return response.json();
}).then(jsonResponse => {
  if (jsonResponse.businesses) {

return jsonResponse.businesses.map(business => ({
  id: business.id,
  imageSrc: business.image_url,
  name: business.name,
  address: business.location.address1,
  city: business.location.city,
  state: business.location.state,
  zipCode: business.location.zipCode,
  category: business.categories[0].title,
  rating: business.rating,
  reviewCount: business.review_count
})
);
};

});
}}
export default Yelp;
