<template lang="pug">
.task(v-if="task")
  .d-flex.border.py-2
    .clear.px-2(@click="cancel") X
    .name.pr-2 {{ taskConfig.name }}
    .end_at
      .tooltipped.tooltipped-nw(:aria-label="'compete at ' + format(task.end_at, 'HH:mm:ss')") {{ task.process }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { format } from 'date-fns'

export default {
  setup () {
    const store = useStore()

    return {
      store,
      task: computed(() => store.state.state.task),
    }
  },
  data () {
    return {
      process: ''
    }
  },
  computed: {
    taskConfig () {
      return this.store.state.game.db.get('task', this.task.id)
    }
  },
  methods: {
    format,
    cancel () {
      this.store.state.game.callEvent({ name: 'CANCEL_TASK' })
    }
  }
}
</script>
