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
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQr8Qa4KG69tj9KcwskjJq9rAovupDtcPVlcu1T1aHKxXQqP98t3YNL4NYNN-Ll0eqQh8dFdaAtaGYD6Qj-_0x36cnUXstpp6-y5jRdaSXkmCDASTDlpZz1hBg.webp?r=6ef",
          null
        ),
        new Movie(
          "#583",
          "Venom",
          "Sci-Fi",
          "1h 52m",
          false,
          "2020",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSf2D-ufix8aWAjOFAUOUzT0NY-TGUpbq2bPT5sWmVlyR_le9zfwZEXvZcEhscrs2W5dOFI-v3xW6erjkQdQl4GBeDxwmog_iOcbjD4awXqyPJHcDGSen2OFlA.webp?r=75f",
          null
        ),
        new Movie(
          "#189",
          "Love and Monsters",
          "Sci-Fi",
          "109m",
          false,
          "2021",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*7079*8259_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYHBVZz17HY1kdRlsAaWpcDpevTKEL5*cO1QyMPSGX3J00*9rYy7*epdloNzO*gW*7nEkcEWxM6czy3zPSR1*i8pdU41.jpg",
          null
        ),
        new Movie(
          "#507",
          "The Hunger Games: Catching Fire",
          "Sci-Fi",
          "2h 20m",
          false,
          "2013",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*251*8998_8_muochl_mvg%5Bzig%5By7838%5B55841v448w929w1uwuu55v3xv11zv4w065yy7838.jpg",
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
          "#257",
          "Monty Python and the Holy Grail",
          "Fantasy",
          "1h 32m",
          false,
          "1975",
          "https://occ-0-1254-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeYt7VXdQ-ZpuW7yhShUmw8k2n8m6V7iQBPY2Gk-kSPBmQbsQ3D0IlxlXUJyxQE7SK-SgsSiZYZS0MzmiJYUjIPOnXH89ryYHAiy.webp?r=ac6",
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
      userArray: [],
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
      window.location.href = "../pages/mylist.html";
    },

    logout() {
      localStorage.removeItem(USER_SIGNED_IN_KEY);
      window.location.href = "../../index.html";
    },
  },

  mounted() {
    this.userArray = JSON.parse(localStorage.getItem(USER_SIGNED_IN_KEY));
    this.username = this.userArray[0]._username;
  },
}).mount("#netflixapp");

