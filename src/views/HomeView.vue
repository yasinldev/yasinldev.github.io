<script setup lang="ts">
import OnlineStatus from '../components/OnlineStatus.vue'
import RealStatus from '../components/RealStatus.vue'
</script>

<template>
  <main>
    <h1>👋 Welcome</h1>
    <p class="description">I'm yasin, 20 years old self-taught computer scientist from Turkey.</p>

    <OnlineStatus discord-id="1108777629571616798" />
    <RealStatus />

    <h2>💻 Programming</h2>
    <p class="description">
      My primary focus is on the web domain, but I am a person with ideals and I plan to start writing my own operating system kernel in the near future because I am against technological ecosystems.
    </p>

    <h2>😺 Additional</h2>
    <p class="description">
      However, my life is not limited to programming compared to other people, I am interested in theoretical, atomic and quantum physics, and my other goal in the future is to combine physics with my programming skills. Other than that, I like listening to music, doing math (except problems) and computer science.
    </p>
  </main>
</template>
