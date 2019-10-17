<template>
  <div>
      <h1>Posts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Number of Proucts on Stock</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.name_of_product }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.number_of_products }}</td>
                    <td><router-link :to="{name: 'edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click.prevent="deletePost(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          item: []
        }
      },
      created() {
      let uri = 'http://vuelaravelcrud.test/api/posts';
      this.axios.get(uri).then(response => {
        this.item = response.data.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://vuelaravelcrud.test/api/post/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.item.splice(this.items.indexOf(id), 1);
        });
      }
    }
  }
</script>