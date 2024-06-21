import { ref, watch } from 'vue'

export function useStorage(key, defaultValue = '') {
  let val = null

  let write = () => {
    if (val.value === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val.value))
    }
  }

  let read = () => {
    return localStorage.getItem(key)
  }

  if (read()) {
    val = ref(read())
  } else {
    val = ref(defaultValue)
    write()
  }

  watch(val, write)

  return val
}
