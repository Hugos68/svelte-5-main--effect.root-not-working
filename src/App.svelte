<script>
  /** @type {{ count: number }} */
  let { count = $bindable(0) } = $props();

  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment}>
  count is {count}
</button>
