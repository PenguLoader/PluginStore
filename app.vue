<template>
    <nav class="bg-blue-100 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 p-4">
            <a href="https://github.com/PenguLoader" class="flex items-center">
                <nuxt-img src="/images/pengu.png" class="h-14 mr-3 rounded-lg" alt="Pengu Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PenguStore</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <client-only>
                    <button>
                        <Icon name="wi:moon-full" class="w-12 h-12" id="lightswitch" @click="
                        useColorMode().value === 'dark' ? useColorMode().value = 'light' : useColorMode().value = 'dark'"
                        />
                    </button>
                        </client-only>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <br>
    <div id="container" class="flex m-auto max-w-md">
        <div class="grid gap-4 grid-flow-col self-center">
            <div class="w-fit inline-block rounded-t-lg dark:dark:bg-gray-800 bg-blue-200">
                <nuxt-img src="/images/1.jpg" alt="Image 1" width="300px" class="m-0 rounded-t-lg"/>
                <div class="rounded-b-lg p-2 border-t-black border-t-2">
                    <h1 class="text-2xl text-center m-2">Image 1</h1>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <Icon name="uil:github" class="w-6 h-6" />
    </footer>
</template>
<script setup>

const colorMode = useColorMode()

</script>
<style>
body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
}
.dark body {
    background-color: #12161f;
    color: #ebf4f1;
}
.light body {
    background-color: rgba(255,255,255,0.8);
    color: #433422;
}

.light #lightswitch {
    color: rgb(49, 48, 46);
}

#lightswitch {
    color: rgba(240, 196, 32, 1);
}

.dark #lightswitch {
    color: rgb(224, 211, 161);
}
</style>