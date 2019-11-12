<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card
          color="green"
          title="All Orders Received"
          text="This is the List of all Orders"
        >
          <v-card-text>
            <h2 class="font-weight-light mb-4">Orders</h2>
           <div>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Order Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.order_amount }}</td>
                    <td>{{ order.order_name }}</td>
                    <td><router-link :to="{name: 'edit', params: { id: order.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
            
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 export default {
      data() {
        return {
          orders: []
        }
      },
      created() {
      let uri = 'http://127.0.0.1:8000/api/productsItems';
      this.axios.get(uri).then(response => {
        this.orders = response.data.data;
        console.log(response);
      });
    }
  }

</script>

<style lang="scss">
  .tim-note {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    left: 0;
    margin-left: 20px;
    width: 260px;
  }
</style>
