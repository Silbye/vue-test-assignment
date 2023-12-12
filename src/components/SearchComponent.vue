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
        <img class="search-item-image" :src="item.download_url" alt="" />
        <div class="search-item-author">{{ item.author }}</div>
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
        .filter((item) => item.author.includes(this.$store.state.searchData))
        .slice(0, 5);
    },
  },
  methods: {
    changeSearchData(event) {
      this.$store.commit("setSearch", event.target.value);
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
