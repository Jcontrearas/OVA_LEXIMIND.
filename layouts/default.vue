<template>
  <div>
    <v-card>
      <v-layout>
        <v-app-bar color="indigo darken-1" dark elevation="4">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title class="d-flex align-center">
            <v-icon icon="mdi-robot" class="me-2"></v-icon>
            <NuxtLink to="/" class="text-white text-decoration-none">LLMs en Educación</NuxtLink>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-if="$vuetify.display.mdAndUp">
            <v-btn prepend-icon="mdi-book-open-variant" variant="text" class="mx-1" to="/resources">Recursos</v-btn>
            <v-btn prepend-icon="mdi-brain" variant="text" class="mx-1" to="/practice">Practicar</v-btn>
          </template>

          <v-btn icon="mdi-magnify" variant="text" class="mx-1"></v-btn>
          <v-btn icon="mdi-account" variant="text" class="mx-1"></v-btn>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
          color="indigo lighten-5"
        >
          <v-list-item class="pa-4">
            <v-list-item-title class="text-h6">
              Aprendizaje con LLMs
            </v-list-item-title>
            <v-list-item-subtitle>  

              Objeto Virtual de Aprendizaje
            </v-list-item-subtitle>
          </v-list-item>

          <v-divider></v-divider>

          <v-list nav>
            <v-list-item
              v-for="item in items"
              :key="item.value"
              :prepend-icon="item.icon"
              :title="item.title"
              :to="item.to"
              :value="item.value"
              rounded="lg"
              class="ma-1"
              active-color="indigo"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-card-text>
            <slot />
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </div>
 
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Inicio',
        value: 'home',
        icon: 'mdi-home',
        to: '/'
      },
      {
        title: 'Contenido',
        value: 'Content',
        icon: 'mdi-brain',
        to: '/content'
      },
      {
        title: 'Aplicaciones Educativas',
        value: 'educational-apps',
        icon: 'mdi-school',
        to: '/educational-apps'
      },
      {
        title: 'Casos de Uso',
        value: 'useCases',
        icon: 'mdi-lightbulb-on',
        to: '/useCases'
        
      },
      {
        title: 'Actividades Prácticas',
        value: 'practical-activities',
        icon: 'mdi-notebook',
        to: '/practical-activities'
      },
      {
        title: 'Evaluación',
        value: 'questions',
        icon: 'mdi-text-box-check',
        to: '/questions'
      },
      
    ],
    hoveredIcon: null,
    icons: [
      { icon: 'mdi-youtube', color: 'red', name: 'YouTube' },
      { icon: 'mdi-twitter', color: 'blue-lighten-3', name: 'Twitter' },
      { icon: 'mdi-instagram', color: 'purple-lighten-1', name: 'Instagram' },
      { icon: 'mdi-linkedin', color: 'blue-darken-1', name: 'LinkedIn' },
      { icon: 'mdi-github', color: 'grey-darken-3', name: 'GitHub' }
    ],
    footerLinks: [
      {
        title: 'Recursos',
        links: [
          { text: 'Tutoriales', icon: 'mdi-video' },
          { text: 'Documentación', icon: 'mdi-file-document' },
          { text: 'Blog', icon: 'mdi-post' }
        ]
      },
      {
        title: 'Comunidad',
        links: [
          { text: 'Foro', icon: 'mdi-forum' },
          { text: 'Eventos', icon: 'mdi-calendar' },
          { text: 'Discord', icon: 'mdi-discord' }
        ]
      },
      {
        title: 'Soporte',
        links: [
          { text: 'Ayuda', icon: 'mdi-help-circle' },
          { text: 'Contacto', icon: 'mdi-email' },
          { text: 'FAQ', icon: 'mdi-frequently-asked-questions' }
        ]
      }
    ]
  }),
  methods: {
    animateIcon(index) {
      this.hoveredIcon = index;
    }
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style>
.me-2{
  font-family: 'Times New Roman', Times, serif;
}

.footer-container {
  border-top: 3px solid rgba(99, 71, 237, 0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height:350px ;
  
  
}

.footer-top-section {
  background: linear-gradient(90deg, rgba(63, 81, 181, 0.9) 0%, rgba(101, 31, 255, 0.8) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  border-radius: 20px;
}

.social-btn {
  transition: all 0.3s ease;
  transform-origin: center;

}

.social-btn:hover {
  transform: translateY(-1px);
}

.connect-text {
  animation: fadeIn 1s ease;
}

.pulse-icon {
  animation: pulse 2s infinite;
}

.heart-beat {
  animation: heartBeat 1.5s infinite;
}

.brain-icon {
  animation: rotate 7s linear infinite;
}

.footer-link {
  transition: all 0.3s;
  opacity: 0.85;
}

.footer-link:hover {
  opacity: 1;
  transform: translateX(4px);
}

.copyright-section {
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.quick-links {
  background-color: rgba(0, 0, 0, 0.1);

}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>