<script>
import { getDocs, collection } from "firebase/firestore";

export default {
  data() {
    return {
      evs: [],
    };
  },
  async mounted() {
    const firestore = useNuxtApp().$firestore;
    const snapshot = await getDocs(collection(firestore, "EVs"));

    this.evs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },
};
</script>

<template>
  <main>
    <h1 class="text-4xl center">Electric Vehicles !</h1>
    <div v-for="ev in evs" :key="ev.id">
      <UPopover>
        <UButton>{{ ev.brand }} {{ ev.model }}</UButton>

        <template #content>
          <pre>{{ ev }}</pre>
        </template>
      </UPopover>
    </div>
  </main>
</template>

<style>
@import url("./index.css");
</style>
