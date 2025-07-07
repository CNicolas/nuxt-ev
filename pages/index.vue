<script>
import { db } from "~/plugins/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      evs:[],
    };
  },
  async mounted() {
    const snapshot = await getDocs(collection(db, "EVs"));
    this.evs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },
};
</script>

<template>
  <main>
    <h1>Index page</h1>
    <ul>
      <li v-for="ev in evs" :key="ev.id">{{ ev.brand }} {{ ev.model }}</li>
    </ul>
  </main>
</template>
