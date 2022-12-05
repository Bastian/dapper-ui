<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import { Key, Mail } from 'tabler-icons-svelte';
	import GitHubIcon from './brand-icons/GitHubIcon.svelte';
	import GoogleIcon from './brand-icons/GoogleIcon.svelte';
	import TwitterIcon from './brand-icons/TwitterIcon.svelte';
</script>

<div>
	<div class="mx-auto w-full max-w-lg space-y-4 rounded bg-white p-8 shadow dark:bg-dark-800">
		<TextField fullWidth id="email" label="Email">
			<Mail slot="icon-label" />
		</TextField>
		<TextField fullWidth id="password" label="Password" type="password">
			<Key slot="icon-label" />
		</TextField>
		<TextField fullWidth id="password-repeat" label="Repeat Password" type="password">
			<Key slot="icon-label" />
		</TextField>
		<Checkbox>Accept Terms of Use</Checkbox>
		<Button fullWidth>Create Account</Button>
		<div class="relative my-8 flex h-6 w-full justify-center">
			<div class="absolute top-3 h-0.5 w-full bg-gray-300 dark:bg-gray-500" />
			<span class="z-10 bg-white px-2 text-gray-600 dark:bg-dark-700 dark:text-gray-300">
				or login with
			</span>
		</div>
		<div class="flex justify-between gap-2">
			<Button fullWidth variant="outline" color="gray">
				<GoogleIcon slot="icon-start" />
				Google
			</Button>
			<Button fullWidth variant="outline" color="gray">
				<GitHubIcon slot="icon-start" />
				GitHub
			</Button>
			<Button fullWidth variant="outline" color="gray">
				<TwitterIcon slot="icon-start" />
				Twitter
			</Button>
		</div>
	</div>
</div>
