<template>
	<div v-if="visible" class="buttomSheet">
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
</template>

<script setup>
const props = defineProps(['visible', 'type']);
</script>

<style lang="scss" scoped>
.buttomSheet {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: red;
	border-radius: 25px 25px 0 0;
}
</style>
