<template>
  <div>
    <query-builder
      :operands="operands"
      v-model="query">
    </query-builder>
  </div>
</template>

<script>
import queryBuilder from './Index.vue'

export default {
  components: {queryBuilder},

  data () {
    return {
      operands: [
        {
          type: 'text',
          id: 'location',
          label: 'Location'
        },
        {
          type: 'number',
          id: 'count',
          label: 'Count'
        }
      ],

      query: 'Location == Newyork'
    }
  }
}
</script>
