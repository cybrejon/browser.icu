<script>
	import Button from '$components/ui/button.svelte';
	import HeroAnimation from '$components/hero-animation.svelte';
	let { anchorId, ...props } = $props();
	import { reveal } from 'svelte-reveal';
</script>

<section {...props} use:reveal={{ preset: 'slide', duration: 300, easing: 'easeInOutBack' }}>
	<div class="relative mx-auto mb-28 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
		<div>
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="relative hidden lg:block">
					<HeroAnimation />
				</div>
				<!-- <p class="text-primary border-primary border-b p-3">Pricing</p> -->
				<div class="flex gap-8 flex-col justify-between">
					<div class="space-y-8">
						<h2 class="font-michroma text-4xl font-medium">Start with zero cost</h2>
						<p class="text-foreground-darker">
							No hidden fees. No nasty surprises. Add credits anytime.
						</p>
					</div>
					<form class="flex flex-col gap-2">
						<input
							type="email"
							class="border-foreground-darker/40 focus:bg-card border px-3 py-2 outline-none"
							placeholder="Your e-mail"
							required
						/>
						<Button noShadow transform variant="outline">Request an invite</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
