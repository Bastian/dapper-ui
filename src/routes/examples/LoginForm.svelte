<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Checkbox from '$lib/components/checkbox/Checkbox.svelte';
	import TextField from '$lib/components/text-field/TextField.svelte';
	import { Key, Mail } from 'tabler-icons-svelte';
	import GitHubIcon from './brand-icons/GitHubIcon.svelte';
	import GoogleIcon from './brand-icons/GoogleIcon.svelte';
	import TwitterIcon from './brand-icons/TwitterIcon.svelte';
</script>

<div>
	<div
		class="d4r-mx-auto d4r-w-full d4r-max-w-lg d4r-space-y-4 d4r-rounded d4r-bg-white d4r-p-8 d4r-shadow dark:d4r-bg-dark-800"
	>
		<TextField fullWidth required id="email" label="Email" placeholder="jane.doe@dapper-ui.dev">
			<Mail slot="icon-label" />
		</TextField>
		<TextField fullWidth required id="password" label="Password" type="password">
			<Key slot="icon-label" />
		</TextField>
		<TextField fullWidth required id="password-repeat" label="Repeat Password" type="password">
			<Key slot="icon-label" />
		</TextField>
		<Checkbox label="Accept Terms of Use" required />
		<Button fullWidth>Create Account</Button>
		<div class="d4r-relative d4r-my-8 d4r-flex d4r-h-6 d4r-w-full d4r-justify-center">
			<div
				class="d4r-absolute d4r-top-3 d4r-h-0.5 d4r-w-full d4r-bg-neutral-300 dark:d4r-bg-neutral-500"
			/>
			<span
				class="d4r-z-10 d4r-bg-white d4r-px-2 d4r-text-neutral-600 dark:d4r-bg-dark-800 dark:d4r-text-neutral-300"
			>
				or login with
			</span>
		</div>
		<div class="d4r-flex d4r-justify-between d4r-gap-2">
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
		</div>
	</div>
</div>
