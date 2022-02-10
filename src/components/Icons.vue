<script>
    import iconList from '../assets/icons.json';

    import Icon from './Icon.vue';

    import swal from 'sweetalert';

    export default {
        name: 'Icons',
        data() {
            return {
                icons: iconList.icons,
            };
        },
        components: {
            Icon
        },
        methods: {
            open: (name, file) => {
                import(`../assets/icons/${file}.svg`)
                    .then(e => {
                        fetch(e.default)
                            .then(r => r.text())
                            .then(data => {
                                swal({
                                    title: name,
                                    content: {
                                        element: 'textarea',
                                        attributes: {
                                            value: data
                                        }
                                    }
                                });
                            });
                    });
            }
        },
    }
</script>

<template lang="pug">
div#icons
    Icon(
        v-for="icon in icons"
        :id="icon.id"
        :name="icon.name"
        :file="icon.file",
        :keywords="icon.keywords"
        @click="open(icon.name, icon.file)"
    )
</template>

<style lang="stylus" scoped>
#icons
    display flex
    width 500px
    box-shadow 2px 2px 10px #0003
    border-radius 4px
    padding 20px 10px
    justify-content center
    margin 40px auto
    background-color #eee
</style>