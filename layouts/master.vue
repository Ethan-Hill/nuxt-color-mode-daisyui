<template>

    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->

            <label for="my-drawer" class="btn btn-square drawer-button">
                <!-- <font-awesome-icon :icon="['fas', 'bars']" /> -->
                <i class="i-carbon-menu h-1/2 w-1/2" />
            </label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>
        </div>
    </div>

    <slot />

</template>