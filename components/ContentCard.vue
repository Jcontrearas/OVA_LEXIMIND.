<template>
  <v-card class="mb-4" elevation="2">
    <v-card-title>{{ content.title }}</v-card-title>
    <v-card-text>
      <p>{{ content.content }}</p>
      <div v-for="(detail, index) in content.details" :key="index" class="mb-2">
        <v-list dense>
          <v-list-item
            v-for="(value, key) in detail"
            :key="key"
          >
            <v-list-item-content>
              <strong>{{ formatKey(key) }}:</strong> {{ value }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <v-btn color="primary" @click="selectContent">Editar Contenido</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  content: { type: Object, required: true },
})

const emit = defineEmits(['select-content'])

const selectContent = () => {
  emit('select-content', props.content)
}

</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}
</style>
