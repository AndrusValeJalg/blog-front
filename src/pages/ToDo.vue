<script setup>
import { ref, computed } from 'vue';
import ItemList from '../components/ItemList.vue';

let i = 0;
let message = ref(' ');
let items = ref([
  { id: i++, name: 'Sai', isDone: true },
  { id: i++, name: 'Munad', isDone: false },
  { id: i++, name: 'Piim', isDone: true },
  { id: i++, name: 'Viin', isDone: false },
  { id: i++, name: 'Kohuke', isDone: false }]);
function add() {
  if (message.value.trim() !== '') {
    items.value.push({ id: i++, name: message.value.trim(), isDone: false });
  }
  message.value = '';
}
let doneItems = computed(() => { return items.value.filter(item => item.isDone) });

let toDoItems = computed(() => { return items.value.filter(item => !item.isDone) });
</script>

<template>
  <div class="level-left">
    <button @click="add" class="button">Click me</button>
    <input type="text" v-model="message" @keydown.enter="add">
  </div>

  <flex style="display: flex; flex-direction: row; justify-content: space-evenly;">

    <div class="itemsLst">
      <item-list :items="items" title="All items" />
    </div>

    <div class="itemsLst">
      <ItemList :items="doneItems" title="Done Items" />
    </div>

    <div class="itemsLst">
      <ItemList :items="toDoItems" title="ToDo Items" />
    </div>

  </flex>
</template>

<style scoped>
.itemsLst {
  background-color: #D9D9D990;
  border-radius: 10px;
  padding: 1cm 2cm 1cm 2cm;
  margin-top: 10rem;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
}
</style>
```