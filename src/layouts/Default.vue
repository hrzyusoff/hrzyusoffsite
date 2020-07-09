<template>
  <!-- main app -->
  <div id="app">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
