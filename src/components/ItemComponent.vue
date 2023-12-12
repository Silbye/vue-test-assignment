<template>
  <div class="item" @click="onClickButton(data)">
    <img class="item-image" :src="data.download_url" alt="" />
    <div class="item-author">{{ data.author }}</div>
  </div>
</template>
<script>
export default {
  name: "ItemComponent",
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    onClickButton(data) {
      this.$router.push({
        name: "itemDetails",
        params: {
          id: data.id,
        },
      });
    },
  },
};
</script>
