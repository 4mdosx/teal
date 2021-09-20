<template>
  <div class="text-right">
    v: {{ meta.version }}
    <span>{{ format(meta.time, 'HH:mm:ss') }}</span>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  props: ['meta'],
  methods: {
    format
  }
}
</script>
