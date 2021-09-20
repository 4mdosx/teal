<template lang="pug">
.state-view
  .active(v-if="state")
    Task
  .player(v-if="player")
    Bar(label="hp" :val="player.hp.val" :max="player.hp.max")
    Bar(label="stamina" :val="player.stamina.val" :max="player.stamina.max")
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Bar from './StateBar'
import Task from './TaskProgress.vue'

export default {
  components: { Bar, Task },
  setup () {
    const store = useStore()

    return {
      store,
      player: computed(() => store.state.player),
      state: computed(() => store.state.state),
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>