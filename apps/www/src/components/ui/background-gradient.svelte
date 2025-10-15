<script lang="ts">
	type Color = 'primary' | 'secondary' | 'accent' | 'foreground';
	interface PositionTypes {
		x: number;
		y: number;
	}
	interface InnerSize {
		w: number;
		h: number;
	}
	let {
		position = {
			x: 0,
			y: 0
		},
		size = 1,
		color,
		opacity,
		innerSize = {
			w: 90,
			h: 90
		},
		...props
	}: {
		position?: PositionTypes;
		size?: number;
		color?: Color;
		opacity?: number;
		innerSize?: InnerSize;
	} = $props();

	let colorClasses = $state({
		primary: `bg-primary/${opacity}`,
		secondary: `bg-secondary/${opacity}`,
		accent: `bg-accent/${opacity}`,
		foreground: `bg-foreground/${opacity}`
	});
</script>

<div
	{...props}
	class="absolute -z-50 flex h-[600px] w-[600px] items-center justify-center"
	style="width: {(600 + 1) * size}px; height: {(600 + 1) *
		size}px; top: {position.y}px; left: {position.x}px;"
>
	<div class="absolute inset-0 backdrop-blur-3xl"></div>
	<div
		class={`${colorClasses[color ?? 'primary']} rounded-full`}
		style="width: {(innerSize.w + 1) * size}px; height: {(innerSize.h + 1) * size}px;"
	></div>
</div>
