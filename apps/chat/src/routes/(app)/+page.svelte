<script>
  import account from "$lib/stores/account.svelte.js";
  import { fade } from "svelte/transition";

  const { data } = $props();

  const numberStyle = new Intl.NumberFormat();
  account.balance = data.balance;

  let input = $state(null);
  let submit = $state(null);
  let prompt = $state.raw("");

  let expanded = $state.raw(false);
  function expand() {
    expanded = true;
    requestAnimationFrame(() => input?.focus());
  }

  let lastTime = 0;
  const throttle = 300;
  function enter(event) {
    const now = Date.now();

    if (!event.shiftKey && event.key === "Enter") {
      event.preventDefault();

      if (now - lastTime > throttle) {
        submit?.click();
        lastTime = now;
      }
    }
  }

  // Upcoming features
  let soonAttach = $state.raw(false);
  function attach() {
    soonAttach = true;
    setTimeout(() => (soonAttach = false), 1000);
  }

  let soonDictate = $state.raw(false);
  function dictate() {
    soonDictate = true;
    setTimeout(() => (soonDictate = false), 1000);
  }
</script>

<article
  class="grid h-full min-w-0 content-center gap-y-8 p-4 sm:max-h-[68rem]"
>
  <mark
    class="from-blaze-300 to-blaze-500 mx-auto bg-transparent bg-linear-to-r bg-clip-text text-5xl font-semibold text-transparent select-none"
  >
    WW<br />W .
  </mark>
  <h1 class="text-text-200 relative text-center text-2xl font-light">
    Control the world wide web with AI
  </h1>
  <form
    class="relative flex min-w-0 flex-col items-center gap-y-4"
    method="POST"
    action="/new"
    autocomplete="off"
  >
    <legend class="text-text-200 font-light">I want to explore:</legend>
    <input
      type="url"
      name="url"
      class="bg-bg-100 text-text-400 hover:ring-blaze-300 focus:ring-blaze-300 w-full rounded-full border-none px-6 py-4 shadow-xs ring-2 ring-transparent placeholder:text-gray-400 focus:outline-hidden"
      placeholder="Enter a link"
      required
    />
    <textarea
      name="prompt"
      class="sr-only"
      tabindex="-1"
      value={prompt}
      required
    ></textarea>
    <div
      class="hover:ring-blaze-300 bg-bg-100 text-text-400 has-focus:ring-blaze-300 relative flex w-full flex-col justify-between shadow-xs ring-2 ring-transparent"
      class:rounded-full={!expanded}
      class:rounded-2xl={expanded}
    >
      {#if !expanded}
        <button
          type="button"
          class="w-full cursor-text px-6 py-4 text-left text-gray-400 focus:outline-hidden"
          onclick={expand}
          onfocus={expand}>Tell me what to do&hellip;</button
        >
      {/if}
      <p
        class="text-text-400 relative block max-h-48 max-w-full overflow-hidden overflow-y-auto break-words transition-[min-height] duration-100 ease-out focus:outline-hidden"
        class:h-0={!expanded}
        class:min-h-0={!expanded}
        class:min-h-24={expanded}
        class:px-6={expanded}
        class:pt-4={expanded}
        contenteditable
        bind:textContent={prompt}
        bind:this={input}
        onkeydown={enter}
      ></p>
      <div
        class="flex items-center justify-end gap-x-2 px-2.5 py-2"
        class:absolute={!expanded}
        class:top-0={!expanded}
        class:right-0={!expanded}
        class:h-full={!expanded}
      >
        {#if expanded}
          <button
            type="button"
            class="hover:ring-blaze-300 focus:ring-blaze-300 relative mr-auto flex items-center rounded-lg p-2 ring-2 ring-transparent focus:outline-hidden"
            in:fade={{ duration: 150 }}
            onclick={attach}
          >
            <small
              class="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 transition-opacity"
              class:opacity-100={soonAttach}>Soon&trade;</small
            >
            <i class="iconify lucide--circle-help size-6"></i>
            <span class="sr-only">Get help</span>
          </button>
          <p class="text-sm text-gray-400" in:fade={{ duration: 150 }}>
            {numberStyle.format(account.balance)} credits
          </p>
          <button
            type="button"
            class="hover:ring-blaze-300 focus:ring-blaze-300 relative flex items-center rounded-lg p-2 ring-2 ring-transparent focus:outline-hidden"
            in:fade={{ duration: 150 }}
            onclick={dictate}
          >
            <small
              class="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 transition-opacity"
              class:opacity-100={soonDictate}>Soon&trade;</small
            >
            <i class="iconify lucide--mic size-6"></i>
            <span class="sr-only">Dictate</span>
          </button>
        {/if}
        <button
          type="submit"
          class="bg-blaze-400 flex cursor-pointer items-center p-2 text-black ring-4 ring-transparent hover:ring-black focus:ring-black focus:outline-hidden"
          class:rounded-full={!expanded}
          class:rounded-lg={expanded}
          bind:this={submit}
        >
          <i class="iconify lucide--send size-6"></i>
          <span class="sr-only">Go</span>
        </button>
      </div>
    </div>
  </form>
</article>
