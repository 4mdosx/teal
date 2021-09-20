<template lang="pug">
.tasks
  .btn(v-for="task in tasks", @click="doTask(task)") {{ task.name }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      store,
      system: computed(() => store.state.system),
    }
  },
  computed: {
    tasks () {
      if (this.system && this.system.tasks) {
        return this.system.tasks
      } else {
        return []
      }
    }
  },
  methods: {
    doTask (task) {
      this.store.state.game.callEvent({
        name: 'START_TASK',
        id: task.id
      })
    }
  }
}
</script>
