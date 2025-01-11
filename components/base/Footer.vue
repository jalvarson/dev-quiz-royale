<script setup>
</script>

<template>
    <div class="footer">
        <span>Made with ❤️ by <a href="https://github.com/jalvarson/" target="_blank">Jonas Alvarson</a></span>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    text-align: center;
    color: $on-surface;
    @include bodySmall;

    a {
        font-weight: 700;
    }
}
</style>