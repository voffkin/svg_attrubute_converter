<template>
  <div class="svg_data_attributes">

    <div class="text_body">
      Converter SVG attributes from <code>id="btn__btn1"</code> to <code>data-name="btn btn1"</code> or <code>class="btn btn1"</code>
    </div>
    <div class="control btn_group">
      <button :class="{'is-success': config === 1}" @click="config = 1" class="button">to data-name</button>
      <button :class="{'is-success': config === 2}" @click="config = 2" class="button">to class</button>
    </div>

    <div class="field is-vertical">
      <div class="field-label is-small">
        <label class="label">Source</label>
      </div>
      <div class="field-body">
        <textarea v-model="textareaSrc" name="src" id="" cols="150" rows="10" class="textarea"></textarea>
      </div>
    </div>

    <button @click="onConvert" class="button">Convert</button>

    <div class="field is-vertical">
      <div class="field-label is-small">
        <label class="label">Result</label>
      </div>
      <div class="field-body">
        <textarea v-model="textareaResult" name="result" id="" cols="150" rows="10" class="textarea"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
const fakeData = `<svg id="layer_1" viewBox="0 0 1426 1007">
  <g id="btns">
    <g id="btn__btn1" >
      <circle cx="500.5" cy="607.5" r="43.5" style="fill: #a8891b"/>
    </g>
    <g id="btn__btn2" >
      <circle cx="497.5" cy="513.5" r="43.5" style="fill: #a8891b"/>
    </g>
  </g>
</svg>
`

export default {
  name: 'svgDataAttributes',
  data () {
    return {
      config: 1,
      textareaResult: null,
      textareaSrc: fakeData
    }
  },
  methods: {
    onConvert () {
      let newAttr = 'data-name'
      if (this.config === 2) {
        newAttr = 'class'
      }
      let div = document.createElement('div')
      div.innerHTML = this.textareaSrc
      div.querySelectorAll('*').forEach(m => {
        if (m.getAttribute('id')) {
          let id = m.getAttribute('id')
          if (id.includes('__')) {
            m.setAttribute(newAttr, id.replace('__', ' '))
          }
        }
      })
      this.textareaResult = div.querySelector('svg').outerHTML
    }
  }
}
</script>
<style lang="stylus" scoped>
.text_body
  padding 10px 0
.btn_group
  button
    margin-right 5px
</style>
