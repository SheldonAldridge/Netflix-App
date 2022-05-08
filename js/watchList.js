const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
    data(){
        return{
            users:[],
            username: "",
            search:"",
            myList:[],
        };
    },

    methods:{
        removeMovieList(id){
            this.myList = JSON.parse(localStorage.getItem(WATCHLIST_KEY));
        
            this.myList = this.myList.filter(function (movie){
            return movie.id != id;
            });

            localStorage.setItem(WATCHLIST_KEY,
            JSON.stringify(this.myList));
        },

        home(){
            window.location.href="../pages/home.html";
        },
        
        logout(){
            localStorage.removeItem(USER_SIGNED_IN_KEY);
            window.location.href = "../index.html";
        },
    },

    computed: {
        myListFiltered() {
          return this.myList.filter((movie) => {
            return movie.name.toLowerCase().includes(this.search.toLowerCase());
          });
        },  
      },

      mounted(){
          this.users = JSON.parse(localStorage.getItem(USER_SIGNED_IN_KEY));
          this.username = this.users[0].username;

          if(!localStorage.getItem(WATCHLIST_KEY)){
              let listArray = [];
              localStorage.setItem(WATCHLIST_KEY, JSON.stringify(listArray))
          }
          this.watchList = JSON.parse(localStorage.getItem(WATCHLIST_KEY))
      },
}).mount("#netflixapp")