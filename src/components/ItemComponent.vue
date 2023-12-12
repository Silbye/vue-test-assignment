<template>
  <div class="item" @click="onClickButton(data)">
    <img class="item-image" :src="getImage(data).image" alt="" />
    <div>
      {{ findUserName !== undefined ? findUserName.username : "" }}
    </div>
    <div class="item-author">{{ data.title }}</div>
  </div>
</template>
<script>
export default {
  name: "ItemComponent",
  props: {
    data: {
      type: Object,
    },
    userID: {
      type: Number,
    },
  },
  computed: {
    findUserName() {
      return this.$store.state.users.find((user) => {
        return user.id === this.userID;
      });
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
    getImage(item) {
      return {
        item,
        image: item.image && require(`../assets/img/${item.image}`),
      };
    },
  },
};
</script>
