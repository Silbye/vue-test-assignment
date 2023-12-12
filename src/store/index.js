import { createStore } from "vuex";

export default createStore({
  state: {
    currentFilter: "All",
    searchData: "",
    items: [],
    users: [],
  },
  getters: {},
  mutations: {
    setItems(state, data) {
      state.items = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setFilter(state, newFilter) {
      state.currentFilter = newFilter;
    },
    setSearch(state, searchData) {
      state.searchData = searchData;
    },
  },
  actions: {
    fetchItems() {
      fetch("https://jsonplaceholder.typicode.com/posts/?_limit=30").then(
        (response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                this.commit(
                  "setItems",
                  data.map((item) => {
                    return {
                      ...item,
                      image: `${item.id}.jpg`,
                    };
                  })
                );
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      );
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              this.commit("setUsers", data);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
