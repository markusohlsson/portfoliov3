<template>
  <div class="section" :id="id">
    <h5 class="title-heading" data-backdrop-text="Contact">Get in Touch</h5>
    <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
    <p>
      Let’s connect — use the form below or reach me on
      <a href="https://www.linkedin.com/in/markusohlsson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </p>

    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <input v-model="form.name" type="text" placeholder="Name" required name="name" />
        <input v-model="form.email" type="email" placeholder="Email" required name="email" />
      </div>
      <input v-model="form.subject" type="text" placeholder="Subject" required name="subject" />
      <textarea v-model="form.message" placeholder="Message" required name="message"></textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Sending...' : 'Send Message' }}
      </button>
    </form>

    <!-- ✅ Success / Error Modal -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="showModal" class="modal-backdrop" @click="showModal = false">
          <div class="modal-content" @click.stop>
            <h3>{{ success ? 'Message sent!' : 'Something went wrong' }}</h3>
            <p v-if="success">Thanks for reaching out — I’ll get back to you soon!</p>
            <p v-else>Please try again later.</p>
            <button @click="showModal = false">Close</button>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ id: String })

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const showModal = ref(false)
const success = ref(false)

async function handleSubmit() {
  loading.value = true
  success.value = false

  try {
    const res = await fetch('https://formsubmit.co/ajax/hello@ohlsson.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (res.ok) {
      success.value = true
      form.value = { name: '', email: '', subject: '', message: '' } // clear
    } else {
      success.value = false
    }
  } catch (err) {
    success.value = false
  } finally {
    loading.value = false
    showModal.value = true
  }
}
</script>

<style scoped>
/* --- Form styles --- */
input,
textarea {
  background: transparent;
  width: 100%;
  border: 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 0 0 1rem;
  box-shadow: none;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Roboto Mono', monospace;
}
input:focus, textarea:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
}

::placeholder {
  color: var(--text-color);
  font-weight: 400;
  font-size: 0.9rem;
  vertical-align: middle;
  font-family: 'Roboto Mono', monospace;
}

textarea {
  height: 250px;
}

.form-row {
  display: flex;
  flex-direction: column; /* Mobile default: stacked */
  gap: 0; /* Mobile default: no extra gap */
}

form {
  padding: 1rem;
  margin: 0 auto;
  width: 90%; /* Mobile default */
}

p a {
  color: inherit;
  text-decoration: underline;
}

button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: rgb(0, 0, 0);
  border-radius: 2em;
  padding: 14px 32px;
  color: white;
  font-size: 0.9em;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Roboto Mono', monospace;
  width: 100%; /* Mobile default: full width */
}

button:hover {
  background: rgba(0, 0, 0, 0.85);
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .form-row {
    flex-direction: row;
    gap: 20px;
  }

  form {
    width: 80%;
  }

  button {
    width: auto;
  }
}

/* --- Modal --- */
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.1); /* translucent to show bg */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 9999;
}

.modal-content {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: #000;
  max-width: 400px;
  width: 90%;
}

.modal-content h3 {
  margin-bottom: 0.5rem;
}

.modal-content button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  background: black;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
