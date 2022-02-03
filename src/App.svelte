<script>
  import { src } from "./video64.js";
  import Rythm from "rythm.js";

  let gotPermission = false;
  let canPlay = false;
  let volumeMeterEl;
  let videoEl;
  let controlEl;
  let tipText = "";

  const LOW = 0.1;
  const HIGH = 0.2;
  const MAX = 0.3;

  const rythm = new Rythm();

  rythm.addRythm("fontSize", "fontSize", 0, 100, {
    min: 1,
    max: 3,
  });

  function play() {
    if (!videoEl) return;

    const promise = videoEl.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          videoEl.style.display = "initial";
          controlEl.hidden = true;
        })
        .catch(() => {
          alert("An error occurred while playing the video.");
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
    }
  }

  async function handleMic() {
    if (rythm.stopped === false) {
      rythm.stop();
    }
    rythm.plugMicrophone().then(function () {
      rythm.start();
    });

    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      gotPermission = true;
    } catch (error) {
      return;
    }
    const audioContext = new AudioContext();
    const mediaStreamAudioSourceNode =
      audioContext.createMediaStreamSource(stream);
    const analyserNode = audioContext.createAnalyser();
    mediaStreamAudioSourceNode.connect(analyserNode);

    const pcmData = new Float32Array(analyserNode.fftSize);
    const onFrame = () => {
      analyserNode.getFloatTimeDomainData(pcmData);
      let sumSquares = 0.0;
      for (const amplitude of pcmData) {
        sumSquares += amplitude * amplitude;
      }
      const value = Math.sqrt(sumSquares / pcmData.length);
      if (volumeMeterEl) {
        volumeMeterEl.value = value;
      }
      if (value < LOW / 2) {
        tipText = "Zzz...";
      } else if (value < LOW) {
        tipText = "excusez-moi?";
      } else if (value < (LOW + HIGH) / 2) {
        tipText = "蛤？！哇聽嘸～";
      } else if (value < HIGH) {
        tipText = "差強人意";
      } else if (value < (HIGH + MAX) / 2) {
        tipText = "可以再大聲一點嗎？";
      } else if (value < MAX) {
        tipText = "就是這個勢頭！";
      } else {
        tipText = "你在大聲什麼啦！";
      }
      if (value > MAX && canPlay) {
        canPlay = false;
        play();
      }
      window.requestAnimationFrame(onFrame);
    };
    window.requestAnimationFrame(onFrame);
  }
</script>

<main class="center-parent">
  <div bind:this={controlEl}>
    {#if !gotPermission}
      {#if canPlay}
        <button
          class="pure-button pure-button-primary custom-button"
          aria-label="開始錄音"
          type="button"
          on:click={handleMic}
          ><svg
            viewBox="0 0 24 24"
            width="100"
            height="100"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
            ><path
              d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
            /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line
              x1="12"
              y1="19"
              x2="12"
              y2="23"
            /><line x1="8" y1="23" x2="16" y2="23" /></svg
          >
        </button>
        <h1 align="center">開始測量</h1>
      {/if}
    {:else}
      <div class="tip-container">
        <meter
          bind:this={volumeMeterEl}
          low="0.1"
          high="0.2"
          max="0.3"
          optimum="0"
        />
        <div class="fontSize tip">{tipText}</div>
      </div>
    {/if}
  </div>
  <video
    style="display: none;"
    on:loadeddata={() => (canPlay = true)}
    bind:this={videoEl}
    on:ended={() => {
      canPlay = true;
      videoEl.style.display = "none";
      videoEl.currentTime = 0;
      controlEl.hidden = false;
    }}
  >
    <!-- <source src="../video/too_loud.mp4" type="video/mp4" /> -->
    <source {src} type="video/mp4" />
    <track kind="captions" src="../video/caption.vtt" srclang="en" />
  </video>
</main>

<footer>
  Built with ❤️ and 科皓不要 | v1.0 |
  <a href="https://github.com/FOBshippingpoint/why-are-you-so-loud">GitHub</a>
  |
  <a href="https://www.youtube.com/channel/UC-UzF0F_qnMhwy9oB-DyWsg">YouTube</a>
</footer>

<style>
  video {
    /* override other styles to make responsive */
    width: 80% !important;
    height: auto !important;
  }

  .custom-button {
    border-radius: 50%;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .tip-container {
    position: relative;
    min-width: 500px;
    text-align: center;
  }

  .tip {
    position: absolute;
    right: 0;
    left: 0;
  }

  :global(html, body, #app) {
    height: 100%;
    font-family: "Noto Sans TC", sans-serif;
  }

  .center-parent {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    background-color: #c7c7c7d2;
    text-align: center;
    padding: 1em;
  }
</style>
