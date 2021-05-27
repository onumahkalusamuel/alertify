<script>
  import { title, message, type, size, showing } from './store'
  import { fade } from 'svelte/transition'

  const closeAlert = () => {
      $showing = false;
      $title = 'Alert';
      $message = '';
      $size = 'small';
      $type = 'neutral';
  }
</script>

{#if $showing}
    <div class="outermost" transition:fade>
      <div class="inner">
          <div class="alert-box {$size}">
                <div class="title">
                    {@html $title}
                    <span style="float:right; padding: 0 10px; cursor: pointer" on:click={closeAlert}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path fill="#444" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                    </span>
                </div>
                <div class="message">{@html $message}</div>
            </div>
      </div>
    </div>
{/if}

<style scoped>
.outermost {
    display:table;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width:100vw;
    height:100vh;
    background: #00000033;
}
.inner {
    display: table-cell;
    vertical-align:middle;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 300px;
}
.alert-box {
    margin:auto;
    box-shadow: 1px 1px 20px 1px #00000055;
}
.alert-box.small {max-width: 500px}
.alert-box.medium {max-width: 750px}
.alert-box.large {max-width: none}

.title {
    padding: 10px;
    background: #cccccc;
    font-weight: bolder;
    color: #444
}
.message {
    padding: 20px 10px;
    text-align:center;
    background:#eeeeee;
    overflow-y: scroll;
    scrollbar-width: none;
    max-height: 95vh;
}
</style>
