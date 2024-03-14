import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projectCards: [
            {img: "design-1.png", corner: "top-right", id: 1},
            {img: "design-2.png", corner: "top-left", id: 2},
            {img: "design-3.png", corner: "bottom-right", id: 3},
            {img: "design-4.png", corner: "bottom-left", id: 4}
        ],
        blogCards: [
            {
                id: 1,
                img: "blog-photo-1.png",
                secondImg: "blog-second-img.png",
                label: "Kitchan Design",
                headline: "Let’s Get Solution For Building Construction Work",
                maintext: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                quoted: "The details are not the details. They make the design.",
                secondHeadline: "Design sprints are great",
                date: "26 December, 2021",
            },
            {
                id: 2,
                img: "blog-photo-2.png",
                secondImg: "blog-second-img.png",
                label: "Living Design",
                headline: "Low Cost Latest Invented Interior Designing Ideas.",
                maintext: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                quoted: "The details are not the details. They make the design.",
                date: "26 December, 2022",
            },
            {
                id: 3,
                img: "blog-photo-3.png",
                secondImg: "blog-second-img.png",
                label: "Interior Design",
                headline: "Best For Any Office & Business Interior Solution",
                maintext: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                quoted: "The details are not the details. They make the design.",
                date: "26 December, 2023",
            },
            {
                id: 4,
                img: "blog-photo-1.png",
                secondImg: "blog-second-img.png",
                label: "Kitchan Design",
                headline: "Let’s Get Solution For Building Construction Work",
                maintext: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                quoted: "The details are not the details. They make the design.",
                date: "26 December, 2024",
            },
            {
                id: 5,
                img: "blog-photo-2.png",
                secondImg: "blog-second-img.png",
                label: "Living Design",
                headline: "Low Cost Latest Invented Interior Designing Ideas.",
                maintext: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                quoted: "The details are not the details. They make the design.",
                date: "26 December, 2025",
            },
            {
                id: 6,
                img: "blog-photo-3.png",
                secondImg: "blog-second-img.png",
                label: "Interior Design",
                headline: "Best For Any Office & Business Interior Solution",
                maintext: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                quoted: "The details are not the details. They make the design.",
                date: "26 December, 2026",
            }
        ]
    },
    getters: {
        getSomeLastPosts: (state) => (some) => {
            return state.blogCards.slice(-some);
        }
    }
})

export default store;
