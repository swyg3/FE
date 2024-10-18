<template>
	<div class="modal-overlay" @click.self="closeModal">
		<div class="modal-content">
			<img :src="imageUrl" alt="Image" class="w-full h-auto object-cover" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imageUrl: {
			type: String,
			required: true,
		},
	},
	methods: {
		closeModal() {
			this.$emit('close');
		},
	},
};
</script>

<style scoped>
/* 모달 스타일 */
.modal-overlay {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.modal-content {
	position: absolute;
	border-radius: 8px;
	max-width: 90%;
	max-height: 90%;
}
</style>
