const e=`<template>
  <div><label class="typo__label">Select with search</label>
    <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name"
                 track-by="name"></multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: {name: 'Vue.js', language: 'JavaScript'},
      options: [
        {name: 'Vue.js', language: 'JavaScript'},
        {name: 'Rails', language: 'Ruby'},
        {name: 'Sinatra', language: 'Ruby'},
        {name: 'Laravel', language: 'PHP'},
        {name: 'Phoenix', language: 'Elixir'}
      ]
    }
  },
  methods: {
    nameWithLang ({name, language}) {
      return \`\${name} — [\${language}]\`
    }
  }
}
<\/script>
`;export{e as default};
