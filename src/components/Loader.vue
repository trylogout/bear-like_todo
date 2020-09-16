<template>
  <div>
    <p>Loading...</p>
    <div class="container">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  filter: url("#goo");
  animation: rotate-move 2s ease-in-out infinite;
}

p{
  color: #878787;
  top: 30%;
  left: 50%;
  position: absolute;
  margin-left: -64.5px;
  margin-top: -85.5px;
  font-size: 32px;
  font-weight: bold;
}

.dot {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.dot-4 {
  background-color: #878787;
  animation: dot-4-move 2s ease infinite, index 6s +2s ease infinite;
}

.dot-3 {
  background-color: #f74d75;
  animation: dot-3-move 2s ease infinite, index 6s ease infinite;
}

.dot-2 {
  background-color: #cb4e4e;
  animation: dot-2-move 2s ease infinite, index 6s -4s ease infinite;
}

.dot-1 {
  background-color: #ad3939;
  animation: dot-1-move 2s ease infinite, index 6s -2s ease infinite;
}

@keyframes dot-4-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translateY(19px) scale(0.45);
  }
  60% {
    transform: translateY(90px) scale(0.45);
  }
  80% {
    transform: translateY(90px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes dot-3-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translateY(-18px) scale(0.45);
  }
  60% {
    transform: translateY(-90px) scale(0.45);
  }
  80% {
    transform: translateY(-90px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes dot-2-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translate(-16px, 12px) scale(0.45);
  }
  60% {
    transform: translate(-80px, 60px) scale(0.45);
  }
  80% {
    transform: translate(-80px, 60px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes dot-1-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translate(16px, 12px) scale(0.45);
  }
  60% {
    transform: translate(80px, 60px) scale(0.45);
  }
  80% {
    transform: translate(80px, 60px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes rotate-move {
  55% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  80% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes index {
  0%,
  100% {
    z-index: 3;
  }
  33.3% {
    z-index: 2;
  }
  66.6% {
    z-index: 1;
  }
}
</style>