import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
     inicio:{},
     mensaje_de_bienbenida:'',
     texto_introductorio:'',

     Que_son_LLMs:{},
     definicion:'',
     ejemplos:[],
     definiciones_clave:[],

     Aplicaciones_educativas:{},
     categorias:[],

     casos_de_uso:{},

     actividades_practicas:{},
     actividades:[],

     evaluacion:{},

    }
  },
})