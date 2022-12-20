<script lang="ts">
	import { Button, Checkbox, TextField } from '$lib';
	import { BrandGithub, BrandGoogle, BrandTwitter, Key, Mail } from 'tabler-icons-svelte';
	import GitHubIcon from './brand-icons/GitHubIcon.svelte';
	import GoogleIcon from './brand-icons/GoogleIcon.svelte';
	import TwitterIcon from './brand-icons/TwitterIcon.svelte';

	export let theme: 'default' | 'playful' | 'professional' = 'default';
</script>

<div
	class="d4r-w-full d4r-space-y-4 d4r-bg-white d4r-p-8 d4r-shadow dark:d4r-bg-dark-700"
	class:d4r-rounded={theme === 'default'}
	class:d4r-rounded-[20px]={theme === 'playful'}
>
	<TextField
		fullWidth
		required
		id="email"
		label={theme === 'professional'
			? 'Email'
			: theme === 'playful'
			? "What's your email address, champ?"
			: 'Email'}
		placeholder={theme === 'professional'
			? ''
			: theme === 'playful'
			? 'playfulpanda@outlook.com'
			: 'jane.doe@dapper-ui.dev'}
	>
		<Mail slot="icon-label" />
	</TextField>
	<TextField
		fullWidth
		required
		id="password"
		label={theme === 'professional'
			? 'Password'
			: theme === 'playful'
			? "Pssst... what's the password?"
			: 'Password'}
		type="password"
	>
		<Key slot="icon-label" />
	</TextField>
	<TextField
		fullWidth
		required
		id="password-repeat"
		label={theme === 'professional'
			? 'Confirm password'
			: theme === 'playful'
			? 'Make sure you got it right'
			: 'Repeat Password'}
		type="password"
	>
		<Key slot="icon-label" />
	</TextField>

	<Checkbox
		label={theme === 'professional'
			? 'Accept Terms of Use'
			: theme === 'playful'
			? "Agree to the T's and C's"
			: 'I agree to the Terms of Use'}
		required
	/>
	<Button
		fullWidth
		gradient={{ from: ['violet', 500], to: 'pink' }}
		variant={theme === 'playful' ? 'gradient' : 'solid'}
	>
		{#if theme === 'playful'}
			Start Your Adventure
		{:else if theme === 'professional'}
			Open Account
		{:else}
			Create Account
		{/if}
	</Button>
	<div class="d4r-relative d4r-my-8 d4r-flex d4r-h-6 d4r-w-full d4r-justify-center">
		<div
			class="d4r-absolute d4r-top-3 d4r-h-0.5 d4r-w-full d4r-bg-neutral-300 dark:d4r-bg-neutral-500"
		/>
		<span
			class="d4r-z-10 d4r-bg-white d4r-px-2 d4r-text-neutral-600 dark:d4r-bg-dark-700 dark:d4r-text-neutral-300"
		>
			or login with
		</span>
	</div>
	<div class="d4r-flex d4r-flex-col d4r-justify-between d4r-gap-2 sm:d4r-flex-row">
		{#if theme === 'professional'}
			<Button fullWidth variant="light" color="gray">
				<BrandGoogle slot="icon-start" />
				Google
			</Button>
			<Button fullWidth variant="light" color="gray">
				<BrandGithub slot="icon-start" />
				GitHub
			</Button>
			<Button fullWidth variant="light" color="gray">
				<BrandTwitter slot="icon-start" />
				Twitter
			</Button>
		{:else}
			<Button fullWidth variant="light" color="gray">
				<GoogleIcon slot="icon-start" />
				Google
			</Button>
			<Button fullWidth variant="light" color="gray">
				<GitHubIcon slot="icon-start" />
				GitHub
			</Button>
			<Button fullWidth variant="light" color="gray">
				<TwitterIcon slot="icon-start" />
				Twitter
			</Button>
		{/if}
	</div>
</div>
