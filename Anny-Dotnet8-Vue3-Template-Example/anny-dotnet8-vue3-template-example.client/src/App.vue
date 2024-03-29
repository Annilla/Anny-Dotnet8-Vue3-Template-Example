<script setup>
import { useCounterStore } from './store/couter.js'

const store = useCounterStore()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <RouterLink to="/TheWelcome">Go to TheWelcome</RouterLink>
      <RouterLink to="/HelloWorld">Go to HelloWorld</RouterLink>
      <div>
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </div>
      <h4>Store Test</h4>
      <p>Count is {{ store.count }}</p>
      <p>Double count is {{ store.doubleCount }}</p>
      <button @click="store.increment()">Increment</button>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>
