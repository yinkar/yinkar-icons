<script>
import iconList from "../assets/icons.json";

import Icon from "./Icon.vue";

export default {
  name: "Icons",
  data() {
    return {
      icons: iconList.icons,
      selectedIcon: {
        name: "",
        svgCode: "",
        base64Code: "",
        svgUrl: "",
        pngUrl: "",
      },
	  modal: false
    };
  },
  components: {
    Icon,
  },
  methods: {
    open(name, file) {
      import(`../assets/icons/${file}.svg`).then(e => {
        fetch(e.default)
          .then((r) => r.text())
          .then(async (data) => {

            let pngUrl = new URL(`./src/assets/icons-png/${file}.png`, location).href;
			let svgUrl = new URL(`./src/assets/icons/${file}.svg`, location).href;

			await import(`../assets/icons-png/${file}.png`).then(e => {
				pngUrl = new URL(e.default, location).href;
			});

			await import(`../assets/icons/${file}.svg`).then(e => {
				svgUrl = new URL(e.default, location).href;
			});

            const icon = {
              name: name,
              svgCode: data,
              base64Code: "",
			  svgUrl: svgUrl,
			  svgUrlCode: `<img src="${svgUrl}" />`,
              pngUrlCode: `<img src="${pngUrl}" />`,
            };

            await fetch(pngUrl)
              .then((r) => r.blob())
              .then(async (d) => {
                const blobToBase6 = async (blob) => {
                  return await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (err) => reject(err);
                  });
                };

                icon.base64Code = `<img src="${await blobToBase6(d)}" />`;
              });

            this.selectedIcon = icon;

			this.modal = true;
          });
      });
    },
  },
};
</script>

<template lang="pug">
#icons
	#icon-list.bg-slate-200.flex.justify-center(
		class="w-3/4"
	)
		Icon(
			v-for="icon in icons",
			:id="icon.id",
			:name="icon.name",
			:file="icon.file",
			:keywords="icon.keywords",
			@click="open(icon.name, icon.file)",
			data-modal-toggle="icon-modal"
		)

	div#modal-overlay.backdrop-blur(
		class="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full"
		v-if="modal"
		@click="modal = false"
	)

	div#icon-modal(
		class="fixed top-20 mx-auto inset-x-0 p-5 border w-1/2 shadow-lg rounded-md bg-white bg-opacity-75"
		v-if="modal"
	)
		div(
			class="mt-1 text-center"
		)
			div(
				class="mx-auto mt-0 mb-2 flex items-center justify-center h-12 w-12 rounded-full bg-slate-200"
			)
				img(
					:src="selectedIcon.svgUrl"
				).inline.p-2
			h3(
				class="text-lg font-medium text-gray-900"
			) {{ selectedIcon.name }}
			div(
				class="mt-2 py-0"
			)
				h4.text-gray-600.text-left.m-2 SVG Code
				textarea.w-full.px-3.py-2.text-gray-400.border.rounded-lg.text-xs(
					class="focus:outline-0"
					rows="2"
					spellcheck="false"
				) {{ selectedIcon.svgCode }}

				h4.text-gray-600.text-left.m-2 Base64 Code
				textarea.w-full.px-3.py-2.text-gray-400.border.rounded-lg.text-xs(
					class="focus:outline-0"
					rows="2"
					spellcheck="false"
				) {{ selectedIcon.base64Code }}
				
				h4.text-gray-600.text-left.m-2 PNG URL Code
				textarea.w-full.px-3.py-2.text-gray-400.border.rounded-lg.text-xs(
					class="focus:outline-0"
					rows="2"
					spellcheck="false"
				) {{ selectedIcon.pngUrlCode }}

				h4.text-gray-600.text-left.m-2 SVG URL Code
				textarea.w-full.px-3.py-2.text-gray-400.border.rounded-lg.text-xs(
					class="focus:outline-0"
					rows="2"
					spellcheck="false"
				) {{ selectedIcon.svgUrlCode }}

</template>

<style lang="stylus" scoped>
#icon-list {
  box-shadow: 2px 2px 10px #0003;
  border-radius: 4px;
  padding: 20px 10px;
  margin: 40px auto;
  flex-wrap: wrap;
}
</style>