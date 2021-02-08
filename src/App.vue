<template>
  <div id="app">
    <v-app>
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        class="primary"
        height="50px"
        dark
        elevation="1"
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span>Registration</span>
        </v-toolbar-title>
      </v-app-bar>
      <router-view />
    </v-app>
  </div>
</template>


