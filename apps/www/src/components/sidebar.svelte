<script lang="ts">
	import { Drawer } from 'vaul-svelte';
	import Icon from '@iconify/svelte';
	import Button from './ui/button.svelte';
</script>

<Drawer.Root direction="left">
	<Drawer.Trigger>
		<Button size="lg" variant="outline">
			<Icon icon="mingcute:right-line" />
		</Button>
	</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/65" />
		<Drawer.Content class="bg-card fixed top-0 right-[10%] bottom-0 left-0 flex flex-col"
			><p>test</p></Drawer.Content
		>
	</Drawer.Portal>
</Drawer.Root>
