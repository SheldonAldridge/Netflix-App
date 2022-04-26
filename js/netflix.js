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

      movie_properties:{
        id:[],
        names:[],
        genre:[],
        comingSoon:[],
        avalable:[],
        thumbnail:[],
        preview:[]
      },

      list: [],
      search: ''
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
    getData().then((resolveData) => 
    { 
      this.list = resolveData;
      const result = {
        id:[],
        names:[],
        genre:[],
        comingSoon:[],
        available:[],
        thumbnail:[],
        preview:[]
      };

      const tmp = new Date();
      const today = tmp.getFullYear() + '-' + String(tmp.getMonth() + 1).padStart(2,'0') + '-' + String(tmp.getDate()).padStart(2,'0');
      resolveData.forEach(movie => 
        {
        result.id.push(movie.id);
        result.names.push(movie.name);
        result.comingSoon.push(movie.is_coming_soon > 0);
        result.thumbnail.push(movie.image);
        result.preview.push(movie.description);
        result.available.push(movie.release_date <= today);
      });
      this.movie_properties = result;
    })
  },


  template: /*HTML Elements*/
    `<div v-if="list.length < 1">Fetching data...</div>
     <div v-else>
     <div class="navbar">
      

        <ul>
        <div class="netflix-logo"></div>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <input class="search" v-model="search">
        </ul
      </div>

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
