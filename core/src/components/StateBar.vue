<template lang="pug">
.state-bar
  .d-flex
    .col-2 {{ label }}
    .col-10.text-right {{ val }} / {{ max }}
</template>

<script>
export default {
  props: ['max', 'val', 'label']
}
</script>