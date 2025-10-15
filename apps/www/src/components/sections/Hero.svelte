<script lang="ts">
	import Button from '$components/ui/button.svelte';
	import Icon from '@iconify/svelte';
	let { ...props } = $props();
	import { reveal } from 'svelte-reveal';
</script>

<section {...props}>
	<div
		class="border-border flex flex-col items-start justify-center gap-9 border-t border-b p-4 px-4 pb-6 sm:px-6 md:px-4 lg:flex-row lg:items-center lg:px-12 lg:py-20"
	>
		<div class="lg:pl-30"><img src="/images/sphere.svg" alt="Browser" /></div>
		<div use:reveal class="max-w-[760px] space-y-8">
			<h1 class="font-michroma text-3xl font-medium text-pretty sm:text-5xl sm:leading-16">
				Supercharged chat-based problem solving<span
					class="text-foreground-darker font-light tracking-widest sm:text-4xl lg:text-5xl"
					>::::::</span
				>
			</h1>
			<p class="text-foreground-darker">
				Browser helps you solve mundane tasks with an intuitive chat based based solution.
			</p>
			<div class="flex flex-wrap items-center gap-1">
				<Button transform noShadow variant="outline"
					><span>Try it for free</span>
					<Icon icon="mingcute:right-line" />
				</Button>
				<div class="relative">
					<Button transform variant="ghost" noShadow><span>Learn more</span></Button>
				</div>
			</div>
		</div>
	</div>
</section>
