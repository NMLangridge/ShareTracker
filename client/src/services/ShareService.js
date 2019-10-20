const baseURL = "http://localhost:3000/api/boughtprice/";

export default {
  getShares() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postShare(payload) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application-json"
      }
    })
    .then(res => res.json())
  },

  deleteShare(id) {
    return fetch(baseURL + id, {
      method: "DELETE"
    })
  }
}
