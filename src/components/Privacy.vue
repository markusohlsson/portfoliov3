    <template>
    <Teleport to="body">
        <transition name="fade">
        <div v-if="visible" class="modal-backdrop" @click="close">
            <div class="modal-content" @click.stop>
            <h3>Privacy Policy</h3>
            <p>
                This contact form is powered by FormSubmit.  
                Your message and contact details are sent directly to my email inbox  
                and are not stored on any server I control.
            </p>
            <p>
                I only use your information to reply to your inquiry.  
                No data is shared or used for any other purpose.
            </p>
            <button @click="close">Close</button>
            </div>
        </div>
        </transition>
    </Teleport>
    </template>

    <script setup>
        import { ref, watch } from 'vue'
        import { useRoute, useRouter } from 'vue-router'

        const visible = ref(false)
        const route = useRoute()
        const router = useRouter()

        // Track the previous route
        const previousRoute = ref(null)

        // Update previousRoute whenever the route changes
        watch(
        () => route.fullPath,
        (newPath, oldPath) => {
            previousRoute.value = oldPath
            visible.value = newPath === '/privacy-policy'
        },
        { immediate: true }
        )

        function close() {
        visible.value = false

        if (route.path === '/privacy-policy') {
            if (previousRoute.value === '/contact') {
            router.back()
            } else {
            router.push('/')
            }
        }
        }
    </script>

    <style scoped>
    .modal-backdrop {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.1);
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
