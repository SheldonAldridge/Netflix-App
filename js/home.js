import { MovieList } from "../js/moviesClasses.js";

const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
  data(){
    return{
      movies:[
        new movie("#6507", 
        "The Adam Project", 
        "Sci-Fi", 
        "106 minutes",
        "false", 
        "9 March 2022", 
        "../images/The Adam Project.jpg"),
        
        new movie("#7770", 
        "Here Comes The Boom", 
        "Comedy",
        "105 minutes",
        "false", 
        "12 October 2012", 
        "../images/Here Comes The Boom.jpg"),
        
        new movie("#2385", 
        "IZombie", 
        "Crime",
        "42 minutes",
        "false", 
        "17 March 2015", 
        "../images/I Zombie.jpg"),

        new movie("#2892", 
        "The Witcher", 
        "Fantasy",
        "47-67 minutes", 
        "false", 
        "20 December 2019", 
        "../images/The Witcher.jpg"),

        new movie("#8679", 
        "The Fighter", 
        "Drama", 
        "116 minutes",
        "false", 
        "25 February 2011", 
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdOBQIok_7x8t8a2XGbRkjMGRcKjpMArjfho0Fo3uL8MQn_7vG9l-IrA4_Fe7HN1tWRTWwAqNMl9BG3l_20GSdXPAL-gxv0cJ8Uk.webp?r=53e"),

        new movie("#7859",
        "Jackass 3.5",
        "Comedy",
        "84 minutes",
        "false",
        "14 June 2011",
        "https://assets.nflxext.com/en_us/ffe/player/html/cadmium-playercore-6.0034.747.911.js")
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

  crime(){
    return this.movies.filter((movie) =>{
      return movie.genre === "Crime" && !movie.comingSoon;
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
    this.users = JSON.parse(localStorage.getItem(USER_SIGNED_IN_KEY))
    this.username = this.users[0]._username
  },
})

.mount("#app");

