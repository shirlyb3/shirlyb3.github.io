Vue.component('menu-item', {
    props: ['menu'],
    template: 
    `<div class="item">
        <div class="menu-item-image">
            <img v-bind:src="menu.itemImageSrc">
        </div>
        <div class="menu-item-title">
            <span>{{menu.itemTitle}}</span>
        </div>
    </div>`
})

var app = new Vue({
    el: '#menu',
    data: {
        menuItems: [
            {
                id: 0,
                itemImageSrc: "https://cdn.pixabay.com/photo/2016/04/29/16/40/rubber-duck-1361280_960_720.jpg",
                itemTitle: "Ask The Duck!"
            }
        ]
    }
})