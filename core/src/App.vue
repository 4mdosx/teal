<template>
  <div class="app">
    <header>
      <Console />
    </header>
    <div class="container">
      <div class="d-flex">
        <div class="col-2 p-2 border">
          <ResourcesView />
        </div>
        <div class="col-2 p-2 border">
          <StateView />
        </div>
        <div class="col-8 px-2">
          <nav class="UnderlineNav">
            <div class="UnderlineNav-body" role="tablist">
              <button class="UnderlineNav-item" role="tab" type="button" :aria-selected="active === 'main'" @click="active = 'main'">Main</button>
              <button class="UnderlineNav-item" role="tab" type="button" :aria-selected="active === 'bookshelf'" @click="active = 'bookshelf'">Bookshelf</button>
              <button class="UnderlineNav-item" role="tab" type="button" :aria-selected="active === 'skills'" @click="active = 'skills'">Skills</button>
              <button class="UnderlineNav-item" role="tab" type="button" :aria-selected="active === 'room'" @click="active = 'room'">Room</button>
              <!-- <button class="UnderlineNav-item" role="tab" type="button" :aria-selected="active === 'werry'">Werry</button> -->
            </div>
          </nav>
          <main class="py-3">
            <MainView v-if="active === 'main'" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Console from '@/components/Console'
import ResourcesView from '@/components/ResourcesView'
import StateView from '@/components/StateView'
import MainView from '@/components/MainView'

export default {
  components: { Console, ResourcesView, StateView, MainView },
  name: 'App',
  data () {
    return {
      active: 'main'
    }
  }
}
</script>

<style>
body {
  background: rgb(240, 243, 246);
}
</style>
