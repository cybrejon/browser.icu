<script lang="ts">
  import google from "$lib/images/hero/google.webp";
  import dexscreener from "$lib/images/hero/dexscreener.webp";
  import pinterest from "$lib/images/hero/pinterest.webp";
  import v0 from "$lib/images/hero/v0.webp";

  let browserWindow: HTMLElement | null = null;

  interface Position {
    x: number;
    y: number;
  }

  // util to find object position inside hero illustration container
  // didnt wanna do pure rive so css animations it is
  $effect(() => {
    browserWindow?.addEventListener("animationend", () => {
      if (browserWindow) {
        browserWindow.style.opacity = "1";
      }
    });

    document.getElementById("ref")!.onclick = function (e: MouseEvent) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log(`Left : ${x} ; Top : ${y}.`);
    };
  });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="ref">
  <!-- {@render task('TODO', 'Build and deploy site', { x: 278, y: 264 }, 'box-1 5s ease')}
	{@render task('TASK', 'Buy groceries and use coupons', { x: 278, y: 264 }, 'box-2 6s ease')}
	{@render task('TASK', 'Watch crypto prices', { x: 278, y: 264 }, 'box-3 7s ease')} -->

  <!-- <div
		class="border-border flex h-[281px] w-[384px] items-center justify-center border opacity-0"
		style="animation: spinner-animation 7.5s;"
	>
		<Icon icon="svg-spinners:180-ring" style="font-size: 2rem; opacity: .4;" />
	</div> -->

  <div
    class="border-border inline-block w-96 space-y-2 border p-2 pb-1"
    bind:this={browserWindow}
  >
    <div
      class="border-border bg-foreground-darker/10 flex items-center justify-between border px-3 py-2"
    >
      <div class="flex gap-2">
        <div class="h-4 w-4 rounded-full bg-white/20"></div>
        <div class="h-4 w-4 rounded-full bg-white/20"></div>
        <div class="h-4 w-4 rounded-full bg-white/20"></div>
      </div>
      <p class="text-xs font-bold">Browser.icu</p>
    </div>
    <div
      class="border-border bg-foreground-darker/60 relative max-h-44 space-y-2 overflow-hidden border p-2"
    >
      <!-- cursor start -->
      <div
        class="absolute top-0 left-0 z-10 flex gap-2"
        style="transform: translate(40px, 40px); animation: cursor-animation 10s infinite;"
      >
        <div>
          <i class="iconify mdi--cursor-default size-5"></i>
        </div>
        <div class="pt-2">
          <p
            class=" bg-foreground text-background rounded-full px-2 py-1 text-xs"
          >
            Agent
          </p>
        </div>
      </div>
      <!-- cursor end -->
      <!-- browser content start -->
      <div
        class="grid h-full grid-cols-4 gap-2"
        style="animation: browser-content0-animation 4s infinite;"
      >
        <div
          class="border-border bg-accent/10 col-span-3 h-20 overflow-hidden border"
        >
          <img class="w-full object-cover" src={google} alt="google" />
        </div>
        <div class="border-border bg-foreground/10 overflow-hidden border">
          <img class="h-full object-cover" src={pinterest} alt="google" />
        </div>
        <div
          class="border-border bg-primary/10 col-span-2 overflow-hidden border"
        >
          <img class="h-full object-cover" src={dexscreener} alt="google" />
        </div>
        <div
          class="border-border bg-secondary/10 col-span-2 overflow-hidden border"
        >
          <img class="h-full object-cover" src={v0} alt="google" />
        </div>
      </div>
      <div
        class="grid h-full grid-cols-4 gap-2"
        style="animation: browser-content0-animation 4s infinite;"
      >
        <div
          class="border-border bg-accent/10 col-span-3 h-20 overflow-hidden border"
        >
          <img class="w-full object-cover" src={google} alt="google" />
        </div>
        <div class="border-border bg-foreground/10 overflow-hidden border">
          <img class="h-full object-cover" src={pinterest} alt="google" />
        </div>
        <div
          class="border-border bg-primary/10 col-span-2 overflow-hidden border"
        >
          <img class="h-full object-cover" src={dexscreener} alt="google" />
        </div>
        <div
          class="border-border bg-secondary/10 col-span-2 overflow-hidden border"
        >
          <img class="h-full object-cover" src={v0} alt="google" />
        </div>
      </div>
      <!-- browser content start -->
    </div>
    <div
      class="border-border flex items-center justify-between border-t px-3 py-2"
    >
      <div class="flex items-center gap-3">
        <i class="iconify mdi--arrow-right-bottom text-foreground-darker"></i>
        <p class="text-foreground-darker">Do everything.</p>
      </div>
      <i class="iconify mdi--send-variant-outline text-foreground-darker"></i>
    </div>
  </div>
</div>

{#snippet task(
  title: string,
  description: string,
  position: Position,
  animation: string
)}
  <div
    class="border-border bg-alt absolute max-w-60 border p-4 opacity-0"
    style="top: 0; left: 0; animation: {animation}; transform: translate({position.x}px, {position.y}px)"
  >
    <p class="text-foreground-darker text-xs">{title}</p>
    <p class="font-semibold">{description}</p>
  </div>
{/snippet}

<style>
  @keyframes -global-spinner-animation {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    95% {
      opacity: 1;
      filter: blur(0);
    }
    100% {
      opacity: 0;
      filter: blur(40px);
    }
  }
  @keyframes -global-browser-window {
    0% {
      opacity: 0;
      filter: blur(40px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
  @keyframes -global-browser-content0-animation {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-104%);
    }
  }
  @keyframes -global-cursor-animation {
    0% {
      transform: translate(40px, 40px);
    }
    10% {
      transform: translate(40px, 40px);
    }
    15% {
      transform: translate(127px, 40px);
    }
    25% {
      transform: translate(127px, 40px);
    }
    26% {
      transform: translate(127px, 40px);
    }
    30% {
      transform: translate(50px, 130px);
    }
    35% {
      transform: translate(50px, 130px) scale(100%);
      filter: brightness(100%);
    }
    38% {
      transform: translate(50px, 130px) scale(90%);
      filter: brightness(140%);
    }
    40% {
      transform: translate(50px, 130px) scale(100%);
      filter: brightness(100%);
    }
    60% {
      transform: translate(280px, 130px);
    }
    75% {
      transform: translate(280px, 20px);
    }
    100% {
      transform: translate(40px, 40px);
    }
  }
  @keyframes -global-box-1 {
    0% {
      transform: translate(-200px, -200px) scale(220%);
      filter: blur(40px);
      opacity: 0;
    }
    20% {
      filter: blur(0);
    }
    40% {
      transform: translate(40px, 70px) scale(100%);
      opacity: 1;
    }
    68% {
      transform: translate(40px, 70px) scale(100%);
      filter: brightness(100%);
    }
    70% {
      transform: translate(40px, 70px) scale(120%);
      filter: brightness(160%);
    }
    75% {
      transform: translate(40px, 70px) scale(100%);
      filter: brightness(100%);
    }
    80% {
      transform: translate(40px, 70px);
      opacity: 1;
    }
    100% {
      transform: translate(278px, 264px);
      opacity: 0;
    }
  }
  @keyframes -global-box-2 {
    0% {
      transform: translate(265px, -500px) scale(220%);
      filter: blur(5px);
    }
    20% {
      filter: blur(0);
    }
    40% {
      transform: translate(280px, 50px) scale(100%);
    }
    68% {
      transform: translate(280px, 50px) scale(100%);
      filter: brightness(100%);
    }
    70% {
      transform: translate(280px, 50px) scale(120%);
      filter: brightness(160%);
    }
    75% {
      transform: translate(280px, 50px) scale(100%);
      filter: brightness(100%);
    }
    80% {
      transform: translate(280px, 50px);
      opacity: 1;
    }
    100% {
      transform: translate(278px, 264px);
      opacity: 0;
    }
  }
  @keyframes -global-box-3 {
    0% {
      transform: translate(965px, -500px) scale(220%);
      filter: blur(5px);
    }
    20% {
      filter: blur(0);
    }
    40% {
      transform: translate(545px, 84px) scale(100%);
    }
    68% {
      transform: translate(545px, 84px) scale(100%);
      filter: brightness(100%);
    }
    70% {
      transform: translate(545px, 84px) scale(120%);
      filter: brightness(160%);
    }
    75% {
      transform: translate(545px, 84px) scale(100%);
      filter: brightness(100%);
    }
    80% {
      transform: translate(545px, 84px);
      opacity: 1;
    }
    100% {
      transform: translate(278px, 264px);
      opacity: 0;
    }
  }
</style>
