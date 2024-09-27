<template>
	<div
		v-if="visible"
		class="absolute h-full top-0 w-full z-50 bg-opacity-50 bg-gray-900"
		@click="closeSheet"
	>
		<div class="p-7 bottomSheet" @click.stop>
			<div v-if="type === 'Terms'">
				<div>sdsddsadd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
				<div>asfd</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['visible', 'type']);

const closeSheet = () => {
	store.state.isVisible = false;
};
</script>

<style lang="scss" scoped>
.bottomSheet {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
	border-radius: 26px 26px 0px 0px;
	background: var(--White, #fff);
	z-index: 12;
}
</style>
