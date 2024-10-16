<template>
	<div>
		<button @click="handleClick" :class="{ active: isActive }">
			{{ categoryName }}
		</button>
	</div>
</template>

<script setup>
const props = defineProps({
	categoryName: {
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

// 클릭 핸들러 함수
const handleClick = () => {
	emit('categoryChanged', props.categoryValue);
};
</script>

<style scoped>
.active {
	color: #1cb08c;
	font-weight: 700;
}
</style>
