<template lang="pug">
.resources
  ul
    li(v-for="r in resourceList" :key="r[0]")
      .d-flex
        .col-6 {{ r[0] }}
        .col-6.text-right {{ r[1].val }} / {{ r[1].max }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      store,
      room: computed(() => store.state.room)
    }
  },
  computed: {
    resources () {
      if (this.room) return this.room.resources
      return []
    },
    resourceList () {
      return Object.entries(this.resources)
    }
  },
  methods: {

  }
}
</script>
