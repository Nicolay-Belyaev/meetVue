Vue.component('product-details', {
    name: 'product-details',
    props: ['name', 'price', 'available'],
    template: `
            <div>
              <span> Name: {{ name }}</span>
              <span> Price:{{ formattedPrice }}</span>
              <span> inStock: {{ availability }}</span>
            </div>
        `,
    computed: {
        formattedPrice () {
            return `$${this.price}`;
        },
        availability () {
            return this.available === "true" ? 'Available' : 'Out of stock';
        }
    }
})

new Vue({
    el: "#products"
});
