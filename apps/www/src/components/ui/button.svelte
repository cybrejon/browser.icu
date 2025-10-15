<script lang="ts">
	type ButtonSize = 'sm' | 'md' | 'lg';
	type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';

	let {
		children,
		class: className = '',
		transform = false,
		noOutline = false,
		variant = 'primary',
		size = 'md',
		disabled = false,
		href,
		noShadow = false,
		fn = () => {},
		...restProps
	}: {
		children: any;
		class?: string;
		transform?: boolean;
		noOutline?: boolean;
		variant?: ButtonVariant;
		size?: ButtonSize;
		disabled?: boolean;
		href?: string;
		noShadow?: boolean;
		fn?: (event: MouseEvent) => void;
	} = $props();
	import { cn } from '$lib/utils';
	import { Button } from 'bits-ui';

	const variantStyles = {
		primary: 'bg-primary text-white hover:bg-primary/70 shadow-primary/40',
		secondary: 'bg-foreground-darker/20 text-white hover:bg-foreground/40 shadow-foreground/10',
		danger: 'bg-red-600 text-white hover:bg-red-700',
		outline:
			'text-foreground border border-foreground-darker/40 hover:bg-foreground-darker/15 shadow-foreground/10',
		ghost: 'bg-transparent text-foreground hover:bg-foreground-darker/15'
	};

	const sizeStyles = {
		sm: 'px-2 py-1 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	const buttonClasses = /* tw */ cn(
		'inline-flex items-center justify-center gap-3',
		'tracking-wide text-nowrap',
		!noShadow && 'shadow-[-4px_4px_0_0_transparent] active:shadow-none',
		'border border-transparent',
		'active:bg-foreground active:text-background',
		transform && 'active:scale-[95%]',
		'transition-colors duration-200',
		variantStyles[variant],
		sizeStyles[size],
		!noOutline && 'outline outline-transparent focus:outline-foreground-darker',
		disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
	);
</script>

<Button.Root {href} onclick={fn} class={buttonClasses + className} {disabled} {...restProps}>
	{@render children()}
</Button.Root>
