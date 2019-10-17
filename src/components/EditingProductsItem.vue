<template>
  <div>
    <h1>Edit Products</h1>
    <form @submit.prevent="updateProducts">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="item.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="item.body" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          item: {}
        }
      },
      created() {
        let uri = `http://vuelaravelcrud.test/api/post/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.item = response.data;
        });
      },
      methods: {
        updateProducts() {
          let uri = `http://vuelaravelcrud.test/api/post/update/${this.$route.params.id}`;
          this.axios.post(uri, this.item).then((response) => {
            this.$router.push({name: 'posts'});
          });
        }
      }
    }
</script>