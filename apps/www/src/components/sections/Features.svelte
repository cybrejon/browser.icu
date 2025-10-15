<script lang="ts">
  let { ...props } = $props();
  import { reveal } from "svelte-reveal";
  import Button from "$components/ui/button.svelte";

  const features = [
    {
      badge: "Features",
      title: "Chat-based prompts",
      description:
        "Maintaining a record of past interactions within a conversation thread enables more contextually aware interactions.",
    },
    {
      // badge: 'Feature',
      title: "SOTA LLM",
      description:
        "Use Claude 4 Sonnet powered AI Agents to enhance and automate your tasks.",
    },
    {
      // badge: 'Feature',
      title: "Advanced caching",
      description: "Get faster analysis and results.",
    },
    {
      // badge: 'Feature',
      title: "Hands-free research",
      description:
        "Turn random ideas into organized reseach. Sit back and let the AI Agent solve it for you.",
    },
    {
      badge: "Use-case",
      title: "One place to get things done",
      description: `
				<div class='flex items-start justify-start gap-4'>
				<p class="text-primary">🞿</p>
				<p>Enhance your <span class="text-foreground">market research</span> efficiency with cutting-edge automation tools. Organize your tasks, streamline workflows, and achieve more with less effort.</p>
				</div>
				<div class='flex items-start justify-start gap-4'>
				<p class="text-primary">🞿</p>
				<p>Stay ahead with instant <span class="text-foreground">competitor insights</span>. Get a comprehensive analysis in pricing, reviews, and strategy however and whenever you need.</p>
				</div>
			`,
    },
  ];
</script>

<section {...props}>
  <div
    class="mx-auto space-y-12 px-4 py-12 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12"
  >
    {#each features as item}
      <article
        use:reveal={{ preset: "fly", duration: 300, easing: "easeInOutBack" }}
      >
        <div class=" flex flex-col gap-8">
          {#if item.badge}
            <p class="text-primary border-primary border-b p-3">{item.badge}</p>
          {/if}

          <h2 class="font-michroma text-4xl font-medium">{item.title}</h2>
          <div class="text-foreground-darker space-y-8">
            {@html item.description}
          </div>
        </div>
      </article>
    {/each}
    <Button transform noShadow variant="outline"
      ><span>Try it for free</span>
      <i class="iconify mdi--keyboard-arrow-right"></i>
    </Button>
  </div>
</section>
