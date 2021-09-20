<template>
  <div class="console p-2">
    <div class="d-flex" v-if="!hide">
      <div class="col-8">
        <div>
          <button class="btn mr-2" @click="store.dispatch('runGame')">Run</button>
          <button class="btn" @click="store.dispatch('stopGame')">stop</button>
        </div>
        <div class="mt-2">
          <button class="btn mr-2" @click="save">Save {{ saveTime ? `on ${format(saveTime, 'HH:mm:ss')}` : '' }}</button>
        </div>
      </div>
      <div class="col-4" v-if="meta">
        <MetaView :meta="meta" />
      </div>
    </div>
    <div class="text-right">
      <button class="btn p-1 toggle-btn" :class="{ 'btn-primary': !hide }" type="button" @click="hide = !hide">
        <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { format } from 'date-fns'
import MetaView from '@/components/MetaView'

export default {
  components: { MetaView },
  name: 'Console',
    setup () {
    const store = useStore()

    return {
      store,
      format,
      game: computed(() => store.state.game),
      meta: computed(() => store.state.meta),
    }
  },
  data () {
    return {
      saveTime: '',
      hide: false
    }
  },
  methods: {
    async save () {
      this.saveTime = await this.store.dispatch('save')
    }
  },
  async mounted () {
    await this.store.dispatch('init')
    this.store.dispatch('runGame')
  },
  unmounted () {
    this.store.dispatch('clear')
  }
}
</script>

<style lang="sass" scoped>
.console
  background: #eeec
  width: 100%
  .toggle-btn
    font-size: .5rem

</style>
