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
    margin: 10px;
    animation-name: load;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .loader div:nth-child(1) {
    background-image: linear-gradient(to top, #ff8e3c, #fd7648, #f65e54, #ea4961, #d9376e);
  }
  .loader div:nth-child(2) {
    background-image: linear-gradient(to top, #ff8e3c, #fd7648, #f65e54, #ea4961, #d9376e);
    animation-delay: -0.6s;
  }
  .loader div:nth-child(3) {
    background-image: linear-gradient(to top, #ff8e3c, #fd7648, #f65e54, #ea4961, #d9376e);
    animation-delay: -0.9s;
  }

  @keyframes load {
    to {
      transform: translateY(-30px);
    }
  }
</style>