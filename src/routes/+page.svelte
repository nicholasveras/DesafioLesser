<script lang="ts">
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import Form from './components/form.svelte';
import Countdown from './components/countdown.svelte';
import Modal from './components/modal.svelte';


// controlar a exibição do modal e do candidato
const showModal = writable(false);
const showCandidate = writable(false);
const showSuccessModal = writable(false);
const showFailModal = writable(false);

let countdownInterval: any = null;

// Função para lidar com o envio do formulário
const handleFormSubmit = () => {
    clearInterval(countdownInterval); // Parar o contador regressivo
    showModal.set(false);
    showSuccessModal.set(true); // Exibir modal de sucesso
};

// Função para lidar com o fechamento do modal de sucesso
const handleSuccessModalClose = () => {
    showSuccessModal.set(false);
};

// Função para lidar com o fechamento do modal de falha
const handleFailModalClose = () => {
    showFailModal.set(false);
};

// Função para começar o desafio
const handleStartChallenge = () => {
    showModal.set(true); // Exibir o formulário e iniciar o contador regressivo
    countdownInterval = setInterval(() => {
        clearInterval(countdownInterval); // Parar o contador regressivo
        showModal.set(false); // Ocultar o formulário
        showFailModal.set(true); // Exibir modal de falha
    }, 15000);
};

// Função para navegar para a página do candidato
const goToCandidatePage = () => {
    goto('/candidate');
};

</script>

<h1>Challenge</h1>

<button on:click={goToCandidatePage}>Candidate Info</button>

<Form on:submit={handleFormSubmit} />

{#if $showModal}
  <Modal>
    <Countdown duration={15} /> 
  </Modal>
{/if}

{#if $showSuccessModal}
  <Modal on:close={handleSuccessModalClose}>
    <p>Challenge finished successfully!</p>
  </Modal>
{/if}

{#if $showFailModal}
  <Modal on:close={handleFailModalClose}>
    <p>Challenge finished with failure!</p>
  </Modal>
{/if}

<button on:click={handleStartChallenge}>Start Challenge</button>
