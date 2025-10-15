<script lang="ts">
	import HeaderOrnament from '$components/header-ornament.svelte';
	import Navbar from '$components/navbar.svelte';
	import '@fontsource/michroma';
	// 100-900 weight
	import '@fontsource-variable/archivo';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Browser.icu</title>
</svelte:head>

<div class=" relative min-h-dvh space-y-12">
	<!-- HEADER START -->
	<div class="h-7 overflow-hidden">
		<HeaderOrnament class="text-foreground-darker/80 -translate-x-4" />
	</div>
	<Navbar />
	<!-- HEADER END -->

	{@render children()}
</div>

<!-- NOISE OVERLAY -->
<div class="site-noise-overlay pointer-events-none fixed inset-0 z-50"></div>
