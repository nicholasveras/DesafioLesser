<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  // Criando variáveis reativas usando writable
  const name = writable('');
  const phone = writable('');
  const email = writable('');

  // Adicionando o ouvinte de evento
  const handleFormData = (event: any) => { // Adicionando tipo explícito para o parâmetro event
    const { name: newName, phone: newPhone, email: newEmail } = event.detail;
    // Atualizando os valores das variáveis reativas
    name.set(newName);
    phone.set(newPhone);
    email.set(newEmail);
  };
  window.addEventListener('formdata', handleFormData);
</script>

<h1>Candidate Info</h1>

<p>Name: {$name}</p>
<p>Phone: {$phone}</p>
<p>Email: {$email}</p>

<button on:click={() => {window.history.back();}}>Back to Challenge</button>
