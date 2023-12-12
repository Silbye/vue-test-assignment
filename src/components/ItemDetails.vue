<template>
  <div class="item-details">
    <div class="container">
      <div class="item-details-item">
        <div class="item-left-side">
          <img class="item-details-image" :src="data.download_url" alt="" />
          <button class="item-details-button" @click="toggleImage">
            See full image
          </button>
        </div>
        <div class="item-right-side">
          <div class="item-details-author">
            {{ data.author }}
          </div>
          <div class="item-details-desc">{{ data.description }}</div>
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
    };
  },
  props: ["id"],
  computed: {},
  methods: {
    toggleImage() {
      const image = document.querySelector(".item-details-image");
      const button = document.querySelector(".item-details-button");
      image.classList.toggle("fullsize-image");
      button.classList.toggle("absolute");
    },
  },
  created() {
    fetch(`https://picsum.photos/id/${this.$route.params.id}/info`)
      .then((response) => {
        response.json().then((data) => {
          this.data = {
            ...data,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue efficitur nibh vel tempor. Nulla laoreet laoreet libero, ut condimentum mi accumsan vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a gravida justo. Nunc viverra posuere sapien, quis sollicitudin leo molestie id. Curabitur auctor quis dui tempus condimentum. Nulla congue rhoncus diam, at faucibus dolor porttitor eget.",
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
