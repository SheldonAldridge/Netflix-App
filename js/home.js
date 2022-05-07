import { Movie } from "../js/movies.js";

const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
  data(){
    return{
      movies:[
        new Movie(
        "#6507", 
        "The Adam Project", 
        "Sci-Fi", 
        "106 minutes",
        false, 
        "9 March 2022", 
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQr8Qa4KG69tj9KcwskjJq9rAovupDtcPVlcu1T1aHKxXQqP98t3YNL4NYNN-Ll0eqQh8dFdaAtaGYD6Qj-_0x36cnUXstpp6-y5jRdaSXkmCDASTDlpZz1hBg.webp?r=6ef",
        null,
        ),
        
        new Movie(
        "#7770", 
        "Here Comes The Boom", 
        "Comedy",
        "105 minutes",
        false,
        "12 October 2012", 
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABazQ4Z5r1lg_fwOK_h2pWt_86Xtup4p7_Zz_a-V-xS1m9okvm1yMqjO1Yk5hDvQOLeAT3aUJkVYm55V9nvlNCt5I_hd4ICgtOadhUs31b-AK5gMSscBFB4COow.webp?r=657",
        null,
        ),

        new Movie("#2385", 
        "IZombie", 
        "Crime",
        "42 minutes",
        false,
        "17 March 2015", 
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABen4hrWdW8EPoWoGmgQZyXKe0LkHSS5s3_EWpdbkugkIze06dsgFELnnW8fe6eq23UEIjsQsfjzGhA0epNzbpCZLHurJ9Tw48y4_.webp?r=c0e",
        null,
        ),

        new Movie("#2892", 
        "The Witcher", 
        "Fantasy",
        "47-67 minutes",
        false,        
        "20 December 2019", 
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSzFqrewVma8qubSm2ufZ5Y8-Q8s32hhyv7zOLJZIbqp_0FwjVn0kE1ZvNxJfk3hmTPqgz_4C9d48OIXS9FNiZ-COLqm9edtB8dFgcijpFjJn5w4T6mfmY8yNg.webp?r=6a6",
        null,
        ),

        new Movie("#8679", 
        "The Fighter", 
        "Drama", 
        "116 minutes",
        false, 
        "25 February 2011", 
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdOBQIok_7x8t8a2XGbRkjMGRcKjpMArjfho0Fo3uL8MQn_7vG9l-IrA4_Fe7HN1tWRTWwAqNMl9BG3l_20GSdXPAL-gxv0cJ8Uk.webp?r=53e",
        null,
        ),

        new Movie("#7859",
        "Jackass 3.5",
        "Comedy",
        "84 minutes",
        false,
        "14 June 2011",
        "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZ2iBUWD19pSI3OASFvafY-rKoS7CcLNuY-sfep5JHKFAfRYcV-GoKUTuJMCk7h57UagK-LNDF_25OShrmAaRUfJw_RJwPJy6zSk.webp?r=88c",
        null,
        ),
      ],

      users: [],
      username:"",
      comingSoon:[],
      //showByIndex:null,
    };
  },

  computed:{
    moviesComingsoon(){
      return this.movies.filter((Movie) => {
        return !Movie.comingSoon;
      });
    },

    availMovies(){
      return this.movies.filter((Movie) =>{
        return !Movie.comingSoon;
      });
    },
  },

  comedy(){
    return this.movies.filter((Movie) =>{
      return Movie.genre === "comedy" && !Movie.comingSoon;
    });
  },

  crime(){
    return this.movies.filter((Movie) =>{
      return Movie.genre === "Crime" && !Movie.comingSoon;
    });
  },

  drama(){
    return this.movies.filter((Movie) =>{
      return Movie.genre === "Drama" && !Movie.comingSoon;
    });
  },

  fantasy(){
    return this.movies.filter((Movie) =>{
      return Movie.genre === "Fantasy" && !Movie.comingSoon;
    });
  },

  
  methods:{
    watchList(id){
      if(!localStorage.getItem(WATCHLIST_KEY)){
        let watchList=[];

        let myListMovie = this.movies.find(function (Movie) {
          return Movie.id == id;
        });
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


  mounted(){
    this.users = JSON.parse(localStorage.getItem(USER_SIGNED_IN_KEY))
    this.username = this.users[0]._username
  },
})

.mount("#netflixapp");

