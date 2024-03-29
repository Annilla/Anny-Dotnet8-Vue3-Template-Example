<script setup>
import { useCounterStore } from './store/couter.js'

const store = useCounterStore()
</script>

<template>
  <v-app>

    <v-navigation-drawer permanent>
      <v-container class="text-center">
        <v-row>
          <v-col cols="12">
            <img alt="Vue logo" src="./assets/logo.svg" width="125" height="125" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <RouterLink to="/TheWelcome">Go to <v-icon color="green-darken-2" icon="mdi-chevron-right"></v-icon> TheWelcome
            </RouterLink><br />
          </v-col>
          <v-col cols="6">
            <RouterLink to="/HelloWorld">Go to <v-icon color="green-darken-2" icon="mdi-chevron-right"></v-icon> HelloWorld
            </RouterLink>
          </v-col>
          <v-col cols="12">
            <strong>Current route path:</strong><br />{{ $route.fullPath }}
          </v-col>
        </v-row>
      </v-container>
      <v-card>
        <v-img height="200px"
          src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cover></v-img>
        <v-card-title>Pinia Store Test</v-card-title>
        <v-card-text>
          <p>Count is {{ store.count }}</p>
          <p>Double count is {{ store.doubleCount }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text" @click="store.increment()">
            Increment
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <div class="pa-10 pl-16">
        <RouterView />
      </div>
    </v-main>

  </v-app>
</template>

<style scoped></style>
