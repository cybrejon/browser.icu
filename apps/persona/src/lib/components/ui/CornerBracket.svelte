<script lang="ts">
  import { cn } from "../../utils";

  const {
    position = "top-left",
    class: className,
  }: { position?: Position; class?: string } = $props();
  type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";
</script>

{#if position === "top-left"}
  <svg
    class={cn(`absolute top-2 left-2 ${className}`)}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      d="M16 4H4v12"
    /></svg
  >
{/if}

{#if position === "bottom-right"}
  <svg
    class={cn(`absolute right-2 bottom-2 ${className}`)}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      d="M8 20h12V8"
    /></svg
  >
{/if}
