<script>
  import { createEventDispatcher } from "svelte";
  import { feedbackMsg, feedbackOpen } from '../stores/Stores.js'

  export let text;

  const dispatch = createEventDispatcher();

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => dispatch("copy", text), e => dispatch("fail"))
      
    feedbackOpen.set(true)
    setTimeout(() => { feedbackOpen.set(false) }, 3000)
  };
</script>

<slot {copy} />
