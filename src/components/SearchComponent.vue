<template>
  <div class="searchbar">
    <input
      type="text"
      id="searchBox"
      @input="changeSearchData"
      placeholder="Search by name"
    />
    <div class="search-output" v-if="$store.state.searchData !== ''">
      <div
        class="search-item"
        v-for="(item, index) in findData"
        :key="index"
        @click="goToItem(item.id)"
      >
        <img class="search-item-image" :src="getImage(item).image" alt="" />
        <div class="search-item-author">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchComponent",
  data() {
    return {};
  },
  computed: {
    findData() {
      return this.$store.state.items
        .filter((item) =>
          item.title.toLowerCase().includes(this.$store.state.searchData)
        )
        .slice(0, 5);
    },
  },
  methods: {
    changeSearchData(event) {
      const search = event.target.value.toLowerCase();
      this.$store.commit("setSearch", search);
    },
    getImage(item) {
      return {
        item,
        image: item.image && require(`../assets/img/${item.image}`),
      };
    },
    goToItem(id) {
      this.$router.push({
        name: "itemDetails",
        params: {
          id: id,
        },
      });
      this.$store.commit("setSearch", "");
    },
  },
};
</script>
