<script lang="ts">
  import Button from "$ui/button.svelte";
  import { slide } from "svelte/transition";
  import Logo from "./ui/logo.svelte";

  let is_scrolled: boolean = $state(false);
  let scroll_position: number = $state(0);
</script>

<svelte:window
  bind:scrollY={scroll_position}
  onscroll={() => {
    if (scroll_position > 70) {
      is_scrolled = true;
    } else {
      is_scrolled = false;
    }
  }}
/>

<nav
  class="bg-background/60 border-border sticky top-0 right-0 left-0 z-30 border-t border-r-0 border-b p-2 backdrop-blur-lg lg:p-0"
>
  <div
    class="mx-auto flex items-center justify-between sm:px-6 md:max-w-2xl lg:max-w-4xl lg:px-12"
  >
    <span class="lg:hidden">
      <Button noOutline size="sm" variant="primary" href="#pricing"
        >start</Button
      >
    </span>
    <a href="/" aria-label="Return to home">
      <div class="flex items-center gap-3">
        <p
          class="font-syne hidden text-2xl font-semibold tracking-tight lg:block"
          aria-label="BrowserDAO"
        >
          <span class="text-primary">Browser</span>.icu
        </p>
        <Logo class="text-primary h-7 w-7" />
      </div>
    </a>
    <div class="hidden items-center lg:flex">
      <!-- TODO:	make variant reactive -->
      <!-- <Button noOutline noShadow size="lg" variant={is_scrolled ? 'primary' : 'ghost'}
				>Start Browser</Button
			> -->
      <div class="max-w-[165px]">
        {#if is_scrolled}
          <div transition:slide>
            <Button noOutline noShadow size="lg" variant="primary"
              >Start Browser</Button
            >
          </div>
        {/if}
        {#if !is_scrolled}
          <div transition:slide>
            <Button noOutline noShadow size="lg" variant="ghost"
              >Start Browser</Button
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>
