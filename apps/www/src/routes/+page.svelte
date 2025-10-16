<script>
  import Cta from "$components/sections/CTA.svelte";
  import Features from "$components/sections/Features.svelte";
  import Footer from "$components/sections/Footer.svelte";
  import Hero from "$components/sections/Hero.svelte";
  import Pricing from "$components/sections/Pricing.svelte";
  import Stats from "$components/sections/Stats.svelte";
  import HeaderOrnament from "$components/header-ornament.svelte";
</script>

<Hero />
<Stats />
<Features />
<Pricing anchorId="pricing" />
<Cta />
<Footer />
<div class="border-border h-7 overflow-hidden border-b">
  <HeaderOrnament class="text-foreground-darker/80 -translate-x-4" />
</div>
