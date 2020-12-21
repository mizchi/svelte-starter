<script lang="ts">
  const themeColor = "blue";
</script>

<style>
  .text {
    color: var(--theme-color);
  }
</style>

<div style="--theme-color: {themeColor}"><span class="text">text</span></div>
