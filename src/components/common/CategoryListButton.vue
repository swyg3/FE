<template>
	<div>
		<button @click="handleClick" :class="{ active: isActive }">
			{{ categoryName }}
		</button>
	</div>
</template>

<script>
export default {
	props: {
		categoryName: String,
		categoryValue: String,
		isActive: Boolean,
	},
	methods: {
		handleClick() {
			this.$emit('categoryChanged', this.categoryValue);
		},
	},
};
</script>

<style scoped>
.active {
	color: #1cb08c;
	font-weight: 700;
}
</style>
