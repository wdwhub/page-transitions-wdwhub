import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: "index",
      indexedUser: 0,
      users: [
        {
          name: "Dad T.",
          img: "/profile2.jpg",
          location: "San Francisco",
          bio:
            "Had a brief careerwith jack-in-the-boxes in Phoenix, AZ. Spent several months managing squirt guns and implementing toy elephants.",
          following: 789,
          followers: 2748,
          photos: 94,
          days: 32,
          trips: ["Walt Disney World", "Disneyland", "Salt Lake City"]
        },
        {
          name: "Mom T.",
          img: "/profile3.jpg",
          location: "San Francisco",
          bio:
            "Bacon nerd. Freelance twitter practitioner. Social media nerd. Pop culture junkie. Proud alcohol advocate. Food geek.",
          following: 140,
          followers: 789,
          photos: 32,
          days: 5,
          trips: ["Walt Disney World", "Disneyland", "Salt Lake City"]
        },
        {
          name: "Daughter T.",
          img: "/profile4.jpg",
          location: "San Francisco",
          bio:
            "Prone to fits of apathy. Writer. Devoted gamer. Web scholar. Hipster-friendly music advocate. Problem solver. Student. Twitter fanatic.",
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ["Walt Disney World", "Disneyland", "Oakland"]
        },
        {
          name: "Son T.",
          img: "/profile5.jpg",
          location: "Kentucky",
          bio:
            "Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.",
          following: 590,
          followers: 1705,
          photos: 45,
          days: 12,
          trips: ["Walt Disney World", "Disneyland", "Mammoth Lakes"]
        }
      ],
      places: [
        {
          name: "Disney Resorts",
          stars: 4,
          rating: 8.9,
          img: "/honolulu.jpg",
          description:
            "If you can, you really should stay at a resort on Disney property.  You truly can stay in the magic that way, especially if you have the Disney Dining Plan.  That way, all the cares of the everyday world are left at home.  So, catch a monorail or hop aboard the skyway and leave the driving to friendly cast members."
        },
        {
          name: "Hollywood Studios",
          stars: 4,
          rating: 7.8,
          img: "/santorini.jpg",
          description:
            "While this resort has been through highs and lows, now is the perfect time.  The newest adventure, Galaxy's Edge, brings Star Wars to the park.  The detail is amazing, and the rides truly puts you in a 'galaxy far, far away.'"
        },
        {
          name: "Magic Kingdom",
          stars: 3,
          rating: 7.4,
          img: "/peru.jpg",
          description:
            "Wandering the cobblestone streets of yesteryear, traveling to a future that never was, or visiting your childhood fantasies, Magic Kingdom has it all."
        }
      ]
    },
    getters: {
      selectedUser: state => {
        return state.users[state.indexedUser];
      }
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },
      addFollower(state) {
        state.users[state.indexedUser].followers++;
      },
      removeFollower(state) {
        state.users[state.indexedUser].followers--;
      },
      changeUser(state, i) {
        state.indexedUser = i;
      }
    }
  });
};

export default createStore;
