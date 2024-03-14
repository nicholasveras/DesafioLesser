<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let name = '';
  let phone = '';
  let email = '';

  const handleSubmit = () => {
    dispatch('submit', { name, phone, email });
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} required>

  <label for="phone">Phone:</label>
  <input type="tel" id="phone" bind:value={phone} required>

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required>

  <button type="submit">Submit</button>
</form>
