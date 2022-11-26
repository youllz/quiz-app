<div class="loader">
  <div></div>
  <div></div>
  <div></div>
</div>




<style>

.loader {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader div {
    height: 5rem;
    width: 5rem;
    border-radius: 100%;
    background-color: aliceblue;
    margin: 10px;
    animation-name: load;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .loader div:nth-child(1) {
    background-image: linear-gradient(to right top, #10002b, #2d1f4f, #513a77, #7856a0, #a274cb);
  }
  .loader div:nth-child(2) {
    background-image: linear-gradient(to right top, #10002b, #2d1f4f, #513a77, #7856a0, #a274cb);
    animation-delay: -0.6s;
  }
  .loader div:nth-child(3) {
    background-image: linear-gradient(to right top, #10002b, #2d1f4f, #513a77, #7856a0, #a274cb);
    animation-delay: -0.9s;
  }

  @keyframes load {
    to {
      transform: translateY(-30px);
    }
  }
</style>