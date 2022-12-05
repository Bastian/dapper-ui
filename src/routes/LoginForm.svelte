<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Checkbox from '$lib/checkbox/Checkbox.svelte';
	import TextField from '$lib/text-field/TextField.svelte';
	import { BrandFacebook, BrandGoogle, BrandTwitter, Key, Mail } from 'tabler-icons-svelte';
</script>

<div class="mx-auto w-full max-w-lg space-y-4 rounded bg-white p-8 shadow dark:bg-dark-700">
	<TextField fullWidth id="email" label="Email">
		<Mail slot="icon-label" />
	</TextField>
	<TextField fullWidth id="password" label="Password" type="password">
		<Key slot="icon-label" />
	</TextField>
	<TextField fullWidth id="password" label="Password" type="password">
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
			<svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 48 48"
				slot="icon-start"
				><defs
					><path
						id="a"
						d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
					/></defs
				><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path
					clip-path="url(#b)"
					fill="#FBBC05"
					d="M0 37V11l17 13z"
				/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path
					clip-path="url(#b)"
					fill="#34A853"
					d="M0 37l30-23 7.9 1L48 0v48H0z"
				/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg
			>Google
		</Button>
		<Button fullWidth variant="outline" color="gray">
			<svg
				slot="icon-start"
				class="fill-current h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 496 512"
				><path
					d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
				/></svg
			>GitHub
		</Button>
		<Button fullWidth variant="outline" color="gray">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				slot="icon-start"
				class="h-6 w-6"
				version="1.1"
				viewBox="0 0 300.00006 244.18703"
				><defs /><metadata
					><rdf:RDF
						><cc:Work rdf:about=""
							><dc:format>image/svg+xml</dc:format><dc:type
								rdf:resource="http://purl.org/dc/dcmitype/StillImage"
							/><dc:title /></cc:Work
						></rdf:RDF
					></metadata
				><g transform="translate(-539.17946,-568.85777)"
					><path
						d="m 633.89823,812.04479 c 112.46038,0 173.95627,-93.16765 173.95627,-173.95625 0,-2.64628 -0.0539,-5.28062 -0.1726,-7.90305 11.93799,-8.63016 22.31446,-19.39999 30.49762,-31.65984 -10.95459,4.86937 -22.74358,8.14741 -35.11071,9.62551 12.62341,-7.56929 22.31446,-19.54304 26.88583,-33.81739 -11.81284,7.00307 -24.89517,12.09297 -38.82383,14.84055 -11.15723,-11.88436 -27.04079,-19.31655 -44.62892,-19.31655 -33.76374,0 -61.14426,27.38052 -61.14426,61.13233 0,4.79784 0.5364,9.46458 1.58538,13.94057 -50.81546,-2.55686 -95.87353,-26.88582 -126.02546,-63.87991 -5.25082,9.03545 -8.27852,19.53111 -8.27852,30.73006 0,21.21186 10.79366,39.93837 27.20766,50.89296 -10.03077,-0.30992 -19.45363,-3.06348 -27.69044,-7.64676 -0.009,0.25652 -0.009,0.50661 -0.009,0.78077 0,29.60957 21.07478,54.3319 49.0513,59.93435 -5.13757,1.40062 -10.54335,2.15158 -16.12196,2.15158 -3.93364,0 -7.76596,-0.38716 -11.49099,-1.1026 7.78383,24.2932 30.35457,41.97073 57.11525,42.46543 -20.92578,16.40207 -47.28712,26.17062 -75.93712,26.17062 -4.92898,0 -9.79834,-0.28036 -14.58427,-0.84634 27.05868,17.34379 59.18936,27.46396 93.72193,27.46396"
						style="fill: rgb(29, 161, 242); fill-opacity: 1; fill-rule: nonzero; stroke: none;"
					/></g
				></svg
			>Twitter
		</Button>
	</div>
</div>
