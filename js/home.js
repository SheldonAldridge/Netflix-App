import { MovieList } from "../js/moviesClasses.js";

const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
  data(){
    return{
      movies:[
        new movie("#6507", "The Adam Project", "Sci-Fi", "false", "9 March 2022", "../images/The Adam Project.jpg"),
        new movie("#7770", "Here Comes The Boom", "Comedy", "false", "12 October 2012", "../images/Here Comes The Boom.jpg"),
        new movie("#2385", "IZombie", "Crime", "false", "17 March 2015", "../images/I Zombie.jpg"),
        new movie("#2892", "The Witcher", "Fantasy", "false", "20 December 2019", "../images/The Witcher.jpg"),
        new movie("#8679", "The Fighter", "Drama", "false", "25 February 2011", "../images/The Fighter.jpg")
      ],

      users: [],
      username:"",
      comingSoon:[],
      slidebyindex:null,
    };
  },

  computed:{
    moviesComingsoon(){
      return this.movies.filter((movie) => {
        return !movie.comingSoon;
      });
    },

    availMovies(){
      return this.movies.filter((movie) =>{
        return !movie.comingSoon;
      });
    },
  },

  comedy(){
    return this.movies.filter((movie) =>{
      return movie.genre === "Comedy" && !movie.comingSoon;
    });
  },

  drama(){
    return this.movies.filter((movie) =>{
      return movie.genre === "Drama" && !movie.comingSoon;
    });
  },

  fantasy(){
    return this.movies.filter((movie) =>{
      return movie.genre === "Fantasy" && !movie.comingSoon;
    });
  },

  
  methods:{
    watchList(index){
      if(!localStorage.getItem(WATCHLIST_KEY)){
        let watchList=[];
        watchList.push(this.availMovies[index]);
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));
      }
      else{
        let watchList = JSON.parse(localStorage.getItem(WATCHLIST_KEY));

        watchList.push(this.availMovies[index]);
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));
    }
  },
},

  watchList(){
    window.location.href = "../pages/watchList.html";
  },

  logout(){
    localStorage.removeItem(USER_SIGNED_IN_KEY);
    window.location.href = ".../../index.html";
  },
},

  mounted(){
    this.users = JSON.parse(localStorage.getItem(USER_SIGNED_IN_KEY));
    this.username = this.users[0]._username;
  },
})

.mount("#app");

