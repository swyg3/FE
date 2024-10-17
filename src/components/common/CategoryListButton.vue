<template>
	<div>
		<button @click="selectCategory" :class="{ active: isActive }">
			{{ categoryLabel }}
		</button>
	</div>
</template>

<script setup>
const props = defineProps({
	categoryLabel: {
		type: String,
		required: true,
	},
	categoryValue: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		required: true,
	},
});
// emit 선언
const emit = defineEmits(['categoryChanged']);

const selectCategory = () => {
	emit('categoryChanged', props.categoryValue);
};
</script>

<style scoped>
.active {
	color: #1cb08c;
	font-weight: 700;
}
</style>
