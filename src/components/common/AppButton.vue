<template>
	<button type="button" class="button-container">{{ btnText }}</button>
</template>

<script setup>
const props = defineProps(['btnText']);
console.log('props', props);
</script>

<style lang="scss" scoped>
.button-container {
	width: 342px;
	height: 48px;
	padding: 12px 84px;
	border-radius: 10px;
	color: white;
	background: var(--Point, #1cb08c);
}
</style>
