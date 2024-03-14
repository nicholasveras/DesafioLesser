<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let duration: number = 15;

  let timeLeft: number = duration;
  let timer: any = null;

  const countdown = () => {
    timeLeft -= 1;
    if (timeLeft === 0) {
      clearInterval(timer!);
    }
  };

  onMount(() => {
    timer = setInterval(countdown, 1000); // Iniciar o contador regressivo
    return () => {
      clearInterval(timer!); // Limpar o intervalo quando o componente for destruído
    };
  });

  $: minutes = Math.floor(timeLeft / 60);
  $: seconds = timeLeft % 60;
</script>

<p>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
