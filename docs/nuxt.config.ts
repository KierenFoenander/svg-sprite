import { defineNuxtConfig } from 'nuxt/config'
import consola from 'consola'

const alias = {}

if (process.env.NODE_ENV === 'development') {
  consola.warn('Using local mhj-svg-sprite!')
  alias['mhj-svg-sprite'] = '../src/module.ts'
}

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  alias,
  modules: ['mhj-svg-sprite']
})
