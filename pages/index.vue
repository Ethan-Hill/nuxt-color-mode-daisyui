<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Hello there</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                <label for="my-modal-4" class="btn modal-button">open modal</label>

                <!-- Put this part before </body> tag -->
                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <label for="my-modal-4" class="modal cursor-pointer">
                    <label class="modal-box relative w-1/2 h-1/2 max-w-5xl flex justify-center items-center	 flex-col"
                        for="">
                        <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use
                            Wikipedia for free!</p>
                    </label>
                </label>

            </div>
        </div>
    </div>
    <div class="p-4 flex gap-4">
        <!-- <p>{{ timestamp }}</p> -->
        <button class="btn">Hello daisyUI</button>
        <select class="select w-full max-w-xs" v-model="colorMode.preference">
            <option disabled selected>Theme</option>
            <option v-for="theme of themes" :key="theme">{{ theme }}</option>
        </select>
    </div>
</template>

<script setup>
import { useTimestamp } from '@vueuse/core'
// const { timestamp, pause, resume } = useTimestamp({ controls: true })

const colorMode = useColorMode();
const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
];

definePageMeta({
    layout: "master",
});
</script>
