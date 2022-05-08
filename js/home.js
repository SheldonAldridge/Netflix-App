import { Movie } from "../js/movies.js";

const USER_SIGNED_IN_KEY = "sign-in-user-storage-key";
const WATCHLIST_KEY = "watchlist-storage key";

Vue.createApp({
  data() {
    return {
      movies: [
        new Movie(
          "#424",
          "We're The Millers",
          "Comedy",
          "109m",
          false,
          "2013",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZkdCzYWbd_hHWB9gBWxsfGeQQcJbtcxjpMeLcUzLlvZ5WMpOtx7A3wujSDFl8d9VQ6ZPfKaiW04jOtCFItOwgAVw6ZRAnY3k7ig.webp?r=38f",
          null
        ),
        new Movie(
          "#393",
          "Wedding Crashers",
          "Comedy",
          "119m",
          false,
          "2005",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUCCs9s0MMTjd0JoOKVEGislShKuRRBbRLBuz_EzyrvDWr9GF9UuKaH-saJ-91Zx1vfY-UfxPnrCfDtyJ_K1Nio8MmCdF-6jZSU1.webp?r=e15",
          null
        ),
        new Movie(
          "#314",
          "Hot Rod",
          "Comedy",
          "88",
          false,
          "2007",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABevEp2agTioLPBURI9ba_Emz-rucJrUeqk2RWhBj4_c19DHsUK5iHU6Cdca3noT6QwXauTROy1mEUjquN1qu0dQZtIRlD5Qb66H6.webp?r=21a",
          null
        ),
        new Movie(
          "#436",
          "Here Comes The Boom",
          "Comedy",
          "1h 45m",
          false,
          "2012",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABazQ4Z5r1lg_fwOK_h2pWt_86Xtup4p7_Zz_a-V-xS1m9okvm1yMqjO1Yk5hDvQOLeAT3aUJkVYm55V9nvlNCt5I_hd4ICgtOadhUs31b-AK5gMSscBFB4COow.webp?r=657",
          null
        ),
        new Movie(
          "#513",
          "Central Intelligence",
          "Comedy",
          "1h 47m",
          false,
          "2016",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdER4n2o9E2wmBRSjZOcAz5fRijUPVtDFN_kILN92joo9LoNJMpnYk11HCcIgN-H48Ltelcd0O9_EgRK853OMW-eobyCI7MlLTwM.webp?r=6b4",
          null
        ),
        new Movie(
          "#379",
          "Ricky Gervais Supernature",
          "Comedy",
          "1h 40m",
          true,
          "24 / 05 / 2022",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUpTWneCBiF7wL_rKDZ-R2hHi0MN-7sNtwiFB1BQmzMQzEwa15Ap5xhlSS6ww6Xu7tBAbK_w1hNxjcVAZI6063d10cyDKOe8ATNV.webp?r=2e6",
          null
        ),
        new Movie(
          "#621",
          "The Adam Project",
          "Sci-Fi",
          "1h 46m",
          false,
          "2022",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfR6xQh_v4IQm4ORWPLuEjgSowYn_6U7fimFosJXiQfnT3lkqoRtkquRWYsmudntaOjfD1LdYonVHAeq4jM5zDIfIhgWuXntfW9v6o4QH8JWY1m7Uv9SWnbSkR6cftF2Zm6oJg.jpg?r=484",
          null
        ),
        new Movie(
          "#583",
          "Venom",
          "Sci-Fi",
          "1h 52m",
          false,
          "2020",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb48RVxuBO0fzYzSHmkEmajuGZ7W0leOkL_WO_ps5OSazngsms82PiLXrWnGXmnl5WCPUJAEIJoWShtZsaccVx5ldolaSgmIcUdxfHbJXnhwc9hSM9l1qQCdm9_ikK2kZB654ga46NToZ-uJEifXuXcISwoftoyqmwYS.webp?r=93b",
          null
        ),
        new Movie(
          "#189",
          "Love and Monsters",
          "Sci-Fi",
          "109m",
          false,
          "2021",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQoVOJuKvT9dgP-wLUtae5cl2aRb0o7U-DhkilYK2PAVTOgPofb81dqcX-QgF8kpQanJ_z7OHoUFTwN5j4E3wjbpCdX0xrb847j-FqYob0RmKVylgFl-fadmZys1IFdHchAtDw.jpg?r=1ca",
          null
        ),
        new Movie(
          "#507",
          "The Hunger Games: Catching Fire",
          "Sci-Fi",
          "2h 20m",
          false,
          "2013",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABax_xs1_aNvNPgNSdbAa_1TTColkxICCTlZeccrh0NW8tRH3ATJ6_sTzRa-O4UIvHRmNdXdFeZzAaaPI8JxZw60KYTIw3EAzotxy.webp?r=33a",
          null
        ),
        new Movie(
          "#184",
          "Ghost In The Shell SAC_2045",
          "Sci-Fi",
          "25m",
          true,
          "23 / 05 / 2022",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfq8ZcV001kToSw-gzZOUXtoE1wn_kjqkgqIGGLUBgchyYmK-v-q9cOFb6Us3sH8GnrRqOQBqc85dq_IRH2JYyNCc9KxbO6DiGxAN2la4CcHF2F9YzFFNRi-DzfP8bSJcjkG2A.jpg?r=e39",
          null
        ),
        new Movie(
          "#332",
          "King Kong",
          "Fantasy",
          "3h 7m",
          false,
          "2005",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUVWLmAt67-FPGMeSvFgl4ccjgUoMU6eQDjrMkJgJRy_DnJQRgRr14kWoSNVD6BjQwqQAjTOMXbtxmooOF29ENdl-IoIS07aNC4H.webp?r=311",
          null
        ),
        new Movie(
          "#361",
          "R.I.P.D",
          "Fantasy",
          "1h 35m",
          false,
          "2013",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS384ss7FqkWpX99iw-KeWoY3b7dx4cEOiZ2uYpuKKpNyiuiYmytwN3yaaAzN3-cRsZpAPt-ol9PKjP4ZOOHv3Xope90ctBgRYwJ.webp?r=c20",
          null
        ),
        new Movie(
          "#602",
          "Seventh Son",
          "Fantasy",
          "1h 42m",
          false,
          "2014",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZHHVRk2XJ2nHQ31pMmlBVPGKLdBk_16i8scm41_E3_I-aKfV1WPsxma5TiNNsOuguKbLAUF9cbiqIizhziNgX4SRaeHRnUio3o7.webp?r=7cc",
          null
        ),
        new Movie(
          "#104",
          "Green Snake",
          "Fantasy",
          "2h 13m",
          false,
          "2021",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYJhUFp0iQnHo3YHh9tE4wc42c397qq5Xt2INSRZTSOmyhul1VurGrnbXXS05zZEzqdy2PrbWgv0OmltS-fF-Iovn_INO_1XbY9TymUUmxb0zfRpeRoWo02OUCohJblvBQdCgQ.jpg?r=dfa",
          null
        ),
        new Movie(
          "#618",
          "Wrath Of The Titans",
          "Fantasy",
          "1h 39m",
          false,
          "2012",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7X4wtPOtTLLL7JOMzOPG0YLK-nHs1kH8RKfguKfZhuH2vIOddsG5_i_jkdoqqPYxIy5qYVAYKql4z2YZi4aDqMAgDS4uWxAeNK.webp?r=ea1",
          null
        ),
        new Movie(
          "#475",
          "The Witcher Blood Origin ",
          "Fantasy",
          "TBA",
          true,
          "TBA 2022",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc6cjsiY1zfZg56iSHrvGAAzpa5IVgfLT--EK9YAu2spTN-s7AGZnNQecGeiRPF0ABbz0AdJPmq7O2gMpFGxePLT4opSPKXIqgJfm_pxi-W2n2PCxxgCK_IJf9e37NmKkfwEIA.jpg?r=259",
          null
        ),
        new Movie(
          "#309",
          "The Fighter",
          "Drama",
          "1h 55m",
          false,
          "2012",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT54OnAk4vzNc1aXoBW2-8_JBdtpbY7BPeDWqg_p1p-N87ynoM7SepYNY-_tGdxSPDX7WLXY3hX9ylRZHQPg6iX0kHSjrcallXQI.webp?r=454",
          null
        ),
        new Movie(
          "#465",
          "DJango",
          "Drama",
          "2h 45m",
          false,
          "2012",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbJYKvtjjZuTYhiLa4KPbLphm87ii-EYueKmtbBiwgk-_I1NSgZESveswmSC6cvFz7OgCDTYc5D_CuX6Se2eSil3BnDxtBuQBOfg.webp?r=27e",
          null
        ),
      ],

      comingSoon: [],
      users: [],
      username: "",
    };
  },

  computed: {
    moviescomingSoon() {
      return this.movies.filter((movie) => {
        return movie.comingSoon;
      });
    },
    avai() {
      return this.movies.filter((movie) => {
        return !movie.comingSoon;
      });
    },

    comedy() {
      return this.movies.filter((movie) => {
        return movie.genre === "Comedy" && !movie.comingSoon;
      });
    },

    scifi() {
      return this.movies.filter((movie) => {
        return movie.genre === "Sci-Fi" && !movie.comingSoon;
      });
    },

    fantasy() {
      return this.movies.filter((movie) => {
        return movie.genre === "Fantasy" && !movie.comingSoon;
      });
    },

    drama() {
      return this.movies.filter((movie) => {
        return movie.genre === "Drama" && !movie.comingSoon;
      });
    },
  },

  methods: {
    WatchList(id) {

      if (!localStorage.getItem(MOVIE_WATCHLIST_KEY)) {
        let watchListArray = [];

        let watchListMovie = this.movies.find(function (movie) {
          return movie.id == id;
        });
        watchListArray.push(watchListMovie);

        localStorage.setItem(
          MOVIE_WATCHLIST_KEY,
          JSON.stringify(watchListArray)
        );
      } else {
        let watchListArray = JSON.parse(
          localStorage.getItem(MOVIE_WATCHLIST_KEY)
        );

        let watchListMovie = this.movies.find(function (movie) {
          return movie.id == id;
        });
        watchListArray.push(watchListMovie);

        localStorage.setItem(
          MOVIE_WATCHLIST_KEY,
          JSON.stringify(watchListArray)
        );
      }
    },

    navToWatchList() {
      window.location.href = "../pages/watchList.html";
    },

    logout() {
      localStorage.removeItem(USER_SIGNED_IN_KEY);
      window.location.href = "../../index.html";
    },
  },

  mounted() {
    this.users = JSON.parse(localStorage.getItem(USER_SIGNED_IN_KEY));
    this.username = this.userArray[0]._username;
  },
}).mount("#netflixapp");

