const url = "https://project-apis.codespace.co.za/api/movies";
const watchlistEndpoint = " https://project-apis.codespace.co.za/api/list";

const { createApp } = window.Vue;

const getData = () =>
  new Promise((resolve) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.data.map((item) => item.name))
      .then((names) => resolve(names));
  });

const component = {
  data() {
    return {
      list: [{
          id:
          
      }],
      search: '',
    }
  },

  computed:{
    filteredList(){
        return this.list.filter(item => item.includes(this.search))
    },

    createID(){
        return this.list.id()
    }
  },

  mounted() {
    getData().then((resolveData) => { this.list = resolveData;})
  },


  template: /*HTML Elements*/
    `<div v-if="list.length < 1">Fetching data...</div>
     <div v-else>
        <input v-model="search">

        <ul>
            <li v-for="item in filteredList">{{ item }}</li>
        </ul>
    </div>
    `
}

window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(component);
  app.mount("#netflixApp");
});
