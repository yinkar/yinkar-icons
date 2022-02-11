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
.icon
    img(:src="iconUrl")
</template>

<style lang="stylus">
.icon
    margin 5px
    padding 5px
    box-sizing border-box
    height 28px
    width 28px
    border-radius 4px
    background-color #fff
    box-shadow 2px 2px 6px #0003
    display flex
    place-content center center
    cursor pointer
    transition 100ms ease-in-out
    transition-property transform, box-shadow

    &:hover
        transform translate(-1px, -1px)
        box-shadow 3px 3px 6px #0003
</style>