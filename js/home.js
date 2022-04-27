const url = "https://project-apis.codespace.co.za/api/movies";
const watchlistEndpoint = " https://project-apis.codespace.co.za/api/list";

const { createApp } = window.Vue;

const getData = () =>
  new Promise((resolve) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.data.map((item) => item.name))
      .then((names) => resolve(names))
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
    `
   
    `
}

window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(component);
  app.mount("#netflixApp");
});
