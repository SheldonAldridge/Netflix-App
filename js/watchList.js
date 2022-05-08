const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
    data(){
        return{
            users:[],
            username: "",
            search:"",
            watchList:[],
        };
    },

    methods:{
        removeMovieList(id){
            this.watchList = JSON.parse(
                localStorage.getItem(WATCHLIST_KEY)
            );
            this.
        }
    }
})