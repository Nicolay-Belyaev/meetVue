Vue.component("blogpost", {
    props: ["post"],
    template: '<div class="blog__post">' +
        '     <div class="blog__post-img">' +
        '         <img class="blog__img" :src=post.backgroundImg alt="photo_post">' +
        '         <div class="blog__post-text">{{ post.buttonText }}</div>' +
        '     </div>' +
        '     <div class="blog__headline">{{ post.headline }}</div>' +
        '     <div class="blog__datebutton">' +
        '         <span class="project__card-text_small"> {{ post.date }}</span>' +
        '         <div class="project__card-button small_button">' +
        '             <img src="../assets/index/triangle.png" alt="triangle">' +
        '         </div>' +
        '     </div>' +
        ' </div>'
})

let articles = new Vue({
    el: "#post__articles",
    data: {
        posts:
            [{
                id: 1,
                backgroundImg: "../assets/blog/post-1.png",
                buttonText: "Kitchan Design",
                headline: "Let’s Get Solution For Building Construction Work",
                date: "26 December,2022"
            },
                {
                    id: 2,
                    backgroundImg: "../assets/blog/post-2.png",
                    buttonText: "Living Design",
                    headline: "Low Cost Latest Invented Interior Designing Ideas",
                    date: "22 December,2022"
                },
                {
                    id: 3,
                    backgroundImg: "../assets/blog/post-3.png",
                    buttonText: "Interior Design",
                    headline: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022"
                },
                {
                    id: 4,
                    backgroundImg: "../assets/blog/post-4.png",
                    buttonText: "Kitchan Design",
                    headline: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022"
                },
                {
                    id: 5,
                    backgroundImg: "../assets/blog/post-5.png",
                    buttonText: "Living Design",
                    headline: "Low Cost Latest Invented Interior Designing Ideas",
                    date: "22 December,2022"
                },
                {
                    id: 6,
                    backgroundImg: "../assets/blog/post-6.png",
                    buttonText: "Interior Design",
                    headline: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022"
                },
            ]
    }
})