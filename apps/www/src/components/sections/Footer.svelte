<script lang="ts">
	import Logo from '$components/ui/logo.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class=" p-4 pt-22">
	<div
		class="mx-auto flex flex-wrap items-center justify-between gap-12 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 xl:border-t-0"
	>
		<div class="space-y-2">
			<a href="/" class="block" aria-label="Return to home">
				<div class=" flex items-center gap-3">
					<p class="font-syne text-4xl font-semibold tracking-tight" aria-label="BrowserDAO">
						<span class="text-primary">Browser</span>.icu
					</p>
					<Logo class="text-primary h-10 w-10" />
				</div>
			</a>
			<p class="text-foreground-darker text-sm">
				Powered by <a class="text-foreground" href="#">Gadabout AI</a> | 2025
			</p>
		</div>
		<div class="flex flex-col gap-2 sm:items-end">
			<p class="text-foreground-darker text-sm">Join the community</p>
			<div class="flex items-center gap-2">
				<a href="#"><Icon icon="mdi:github" style="font-size: 1.6rem;" /></a>
				<a href="#"><Icon icon="hugeicons:new-twitter" style="font-size: 1.6rem;" /></a>
				<a href="#"><Icon icon="ic:baseline-discord" style="font-size: 2rem;" /></a>
			</div>
		</div>
	</div>
</section>
