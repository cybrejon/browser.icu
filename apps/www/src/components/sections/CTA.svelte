<script>
  import Button from "$components/ui/button.svelte";
  import { reveal } from "svelte-reveal";
  let { ...props } = $props();
</script>

<section
  use:reveal={{ preset: "blur", duration: 800, easing: "easeInOutBack" }}
  {...props}
  class="border-border bg-foreground"
>
  <div
    class="mx-auto border-t border-l p-4 px-4 py-12 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 xl:border-t-0"
  >
    <div class="space-y-8">
      <p class="text-primary border-primary border-b p-3">Open-source</p>
      <h2 class="font-michroma text-background text-4xl font-medium">
        Join the effort
      </h2>
      <p class="text-foreground-darker">
        Browser.icu is open-source. Run our sessions locally for free and help
        us grow.
      </p>
      <div class="flex items-center justify-start gap-2">
        <Button variant="outline">
          <i class="iconify logos--github-icon size-5 text-background"></i>
          <span class="text-background">GitHub</span>
        </Button>
        <Button variant="outline">
          <span class="text-background">Docs</span>
        </Button>
      </div>
    </div>
  </div>
</section>
