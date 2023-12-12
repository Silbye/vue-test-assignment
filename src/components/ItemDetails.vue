<template>
  <div class="item-details">
    <div class="container">
      <div class="item-details-item">
        <div class="item-left-side">
          <img
            :class="
              fullsizeImage
                ? 'item-details-image fullsize-image'
                : 'item-details-image'
            "
            :src="getImage(data).image"
            alt=""
          />
          <button
            :class="
              fullsizeImage
                ? 'item-details-button absolute'
                : 'item-details-button'
            "
            id="details"
            @click="toggleImage"
          >
            {{ fullsizeImage ? "Hide full image" : "See full image" }}
          </button>
        </div>
        <div class="item-right-side">
          <div class="item-details-title">
            {{ data.title }}
          </div>
          <div class="item-details-desc">{{ data.body }}</div>
          <button class="item-back-button" @click="goBack">Go back</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemDetails",
  data() {
    return {
      data: "",
      fullsizeImage: false,
    };
  },
  props: ["id"],
  computed: {},
  methods: {
    toggleImage() {
      this.fullsizeImage = !this.fullsizeImage;
    },
    goBack() {
      this.$router.push({ name: "home" });
    },
    getImage(item) {
      return {
        item,
        image: item.image && require(`../assets/img/${item.image}`),
      };
    },
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then((response) => {
        response.json().then((data) => {
          this.data = {
            ...data,
            image: `${data.id}.jpg`,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
