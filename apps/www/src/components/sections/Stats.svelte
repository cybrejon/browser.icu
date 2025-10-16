<script lang="ts">
  let { ...props } = $props();
  import { reveal } from "svelte-reveal";

  const stats = [
    { name: "Browser agent sessions", value: "4,264" },
    { name: "Total pages scanned", value: "9,080" },
    { name: "Active users", value: "155" },
  ];
</script>

<section {...props}>
  <div
    class="mx-auto grid grid-cols-1 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:grid-cols-3 gap-6 lg:px-12"
  >
    {#each stats as item, i}
      <div
        key={i}
        use:reveal={{ preset: "slide", duration: 300, easing: "easeInOutBack" }}
        class="flex flex-col items-start gap-2 border border-b-4 p-4 pt-12 sm:pt-20"
      >
        <h2
          class="font-michroma text-2xl sm:text-4xl font-medium tracking-tighter"
        >
          {item.value}
        </h2>
        <p class="text-foreground-darker">{item.name}</p>
      </div>
    {/each}
  </div>
</section>
