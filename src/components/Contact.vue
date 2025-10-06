<template>
    <div class="section" :id="id">
        <h5 class="title-heading" data-backdrop-text="Contact">Get in Touch</h5>
        <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <p>Let’s connect — use the form below or reach me on <a href="https://www.linkedin.com/in/markusohlsson/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        <form action="">
            <div class="form-row">
                <input type="text" placeholder="Names" required/>
                <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required/>
            <textarea name="" id="" placeholder="Message" required></textarea>
            <button type="submit" >Send Message</button>
        </form>
    </div>
</template>

<style scoped>
/* --- Base: Mobile first --- */
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
</style>

<script setup>
const props = defineProps({
  id: String
});
</script>