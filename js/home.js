import {MovieList} from "../js/moviesClasses.js";

const url = "https://project-apis.codespace.co.za/api/movies";
const watchlistEndpoint = " https://project-apis.codespace.co.za/api/list";

const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
  data(){
    return{
      movies:[
        new movie("#6507", "The Adam Project", "Sci-Fi", "false", "9 March 2022", "../images/The Adam Project.jpg"),
        new movie("#7770", "Here Comes The Boom", "Comedy", "false", "12 October 2012", "../images/Here Comes The Boom.jpg"),
        new movie("#2385", "IZombie", "Crime TV Shows", "false", "17 March 2015", "../images/I Zombie.jpg"),
        new movie("#2892", "The Witcher", "Fantasy TV Shows", "false", "20 December 2019", "../images/The Witcher.jpg"),
        new movie("#8679", "The Fighter", "Drama", "false", "25 February 2011", "../images/The Fighter.jpg")
      ],
      users:[],
      username:"",
    };
  },

  methods:{
    addToWatchList(index){
      if(!localStorage.getItem(WATCHLIST_KEY)){
        let watchList=[];
        watchList.push(this.movies[index]);
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList))
      }
    }
  }
})

