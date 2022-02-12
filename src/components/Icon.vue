<script>
export default {
    name: 'Icon',
    data() {
        return {
            iconUrl: `data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'`+
            `%20viewBox='0%200%2020%2020'%3E%3Ctext%20x='0'%20y='14'%3E⏳️%3C/text%3E%`+
            `3C/svg%3E`,
        };
    },
    props: [
        "id",
        "name",
        "file",
        "keywords"
    ],
    methods: {
        
    },
    mounted() {
        import(`../assets/icons/${this.file}.svg`)
            .then(e => {
                this.iconUrl = e.default;
            });
    }
}
</script>

<template lang="pug">
.icon.shadow-md.bg-gray-700.transition-all(
    class="hover:shadow-lg hover:bg-gray-800"
)
    img(:src="iconUrl" width="14" height="14" :alt="name")
</template>

<style lang="stylus">
.icon
    margin 25px
    padding 20px
    box-sizing border-box
    height 56px
    width 56px
    border-radius 50%
    display flex
    place-content center center
    cursor pointer

.icon > img
    filter invert()

</style>