<template>
  <div class="home-page">
    <div class="container">
      <div class="filters">
        <button class="filter" @click="changeFilter">All</button>
        <button
          v-for="(author, index) in fetchAuthors"
          :key="index"
          :value="author.author"
          class="filter"
          @click="changeFilter"
        >
          {{ author.author }}
        </button>
      </div>
      <div class="items">
        <ItemComponent
          v-for="(item, index) in pageDisplay(filteredList)"
          :key="index"
          :data="item"
        />
      </div>
      <div class="pages">
        <button class="prev-button" @click="prevPage">{{ "<" }}</button>
        <button
          v-if="currentPage - 2 >= 1"
          @click="changePage(currentPage - 2)"
        >
          {{ currentPage - 2 }}
        </button>
        <button
          v-if="currentPage - 1 >= 1"
          @click="changePage(currentPage - 1)"
        >
          {{ currentPage - 1 }}
        </button>
        <button class="active-page">{{ currentPage }}</button>
        <button
          v-if="currentPage + 1 <= calcPages"
          @click="changePage(currentPage + 1)"
        >
          {{ currentPage + 1 }}
        </button>
        <button
          v-if="currentPage + 2 <= calcPages"
          @click="changePage(currentPage + 2)"
        >
          {{ currentPage + 2 }}
        </button>
        <button class="next-button" @click="nextPage">{{ ">" }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemComponent from "./ItemComponent.vue";

export default {
  name: "HomePage",
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    ItemComponent,
  },
  computed: {
    filteredList() {
      if (this.$store.state.currentFilter !== "All") {
        return this.$store.state.items.filter(
          (item) => item.author == this.$store.state.currentFilter
        );
      } else {
        return this.$store.state.items;
      }
    },
    fetchAuthors() {
      const items = this.$store.state.items;
      return items.reduce((seed, current) => {
        return Object.assign(seed, {
          [current.author]: current,
        });
      }, {});
    },
    calcPages() {
      const totalPages = Math.ceil(this.filteredList.length / 10);
      return totalPages;
    },
  },
  created() {
    this.$store.dispatch("fetchItems");
  },
  methods: {
    changeFilter(event) {
      this.$store.commit("setFilter", event.target.textContent);
      this.currentPage = 1;
    },
    pageDisplay(items) {
      const startIndex = (this.currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      return items.slice(startIndex, endIndex);
    },
    changePage(n) {
      this.currentPage = n;
    },
    prevPage() {
      if (this.currentPage !== 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage !== this.calcPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
.items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
