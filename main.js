const { createApp } = Vue;
createApp({
  data() {
    return {
      axios,
      list: [],
    };
  },

  method: {},

  mounted() {
    axios
      .get("http://localhost/php-dischi-json/store.json")
      .then((response) => {
        this.list = response.data;
        console.log(this.list);
      });
  },
}).mount("#app");