<script>
  import Hero from "$components/sections/Hero.svelte";
  import HeaderOrnament from "$components/header-ornament.svelte";
  import Stats from "$components/sections/Stats.svelte";
  import Features from "$components/sections/Features.svelte";
</script>

<Hero />
<Stats />
<Features />
<div class="border-border h-7 overflow-hidden border-b">
  <HeaderOrnament class="text-foreground-darker/80 -translate-x-4" />
</div>
