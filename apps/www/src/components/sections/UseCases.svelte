<script lang="ts">
	import Button from '$components/ui/button.svelte';
	import Icon from '@iconify/svelte';
	let { ...props } = $props();
</script>

<section {...props} class="border-border border-y">
	<div
		class="mx-auto flex flex-col items-start gap-8 p-4 py-12 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12"
	>
		<p class="text-primary border-primary w-full border-b p-3">Use-case</p>
		<h2 class="font-michroma text-4xl font-medium">One place to get things done</h2>
		<p class="text-foreground-darker pb-2">
			Enhance your research efficiency with cutting-edge automation tools. Organize your tasks,
			streamline workflows, and achieve more with less effort.
		</p>
		<Button transform noShadow variant="outline"
			><span>Try it for free</span>
			<Icon icon="mingcute:right-line" />
		</Button>
	</div>
</section>
