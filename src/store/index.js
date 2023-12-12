import { createStore } from "vuex";

export default createStore({
    state: {
        currentFilter: "All",
        searchData: "",
        items: [],
    },
    getters: {},
    mutations: {
        setItems(state, data) {
            state.items = data;
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
            fetch("https://picsum.photos/v2/list")
                .then((response) => {
                    if (response.ok) {
                        response.json().then((data) => {
                            this.commit(
                                "setItems",
                                data.map((item) => {
                                    return {
                                        ...item,
                                        description: "Phasellus fermentum sapien nulla, non feugiat lacus ultrices a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
                                    };
                                })
                            );
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