<template lang="pug">
.task(v-if="task")
  .d-flex.border.py-2
    .clear.px-2(@click="cancel") X
    .name.pr-2 {{ taskConfig.name }}
    .end_at
      .tooltipped.tooltipped-nw(:aria-label="'compete at ' + format(task.end_at, 'HH:mm:ss')") {{ process }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import tasksJSON from '../../../data/tasks.json'
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
      return tasksJSON.find(t => t.id === this.task.id)
    }
  },
  watch: {
    task () {
      this.updateProcess()
    }
  },
  methods: {
    format,
    cancel () {
      this.store.state.game.callEvent({ name: 'CANCEL_TASK' })
      console.log('okk')
    },
    updateProcess () {
      if (!this.task) return
      const length = this.taskConfig.length
      const done = Math.ceil((this.task.end_at - Date.now()) / 1000 / 60)
      this.process = `${length - done}/${length}`
      window.setTimeout(this.updateProcess, 10 * 1000)
    }
  },
  mounted () {
    this.updateProcess()
  }
}
</script>
