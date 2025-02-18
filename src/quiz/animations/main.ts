

const aliceTumbling: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

async function animateSequentially() {
  const alice1 = document.querySelector<HTMLElement>("#alice1");
  const alice2 = document.querySelector<HTMLElement>("#alice2");
  const alice3 = document.querySelector<HTMLElement>("#alice3");

  if (!alice1 || !alice2 || !alice3) {
      console.warn("#alice not found");
      return;
  }

  try {
      await alice1.animate(aliceTumbling, aliceTiming).finished;
      
      await alice2.animate(aliceTumbling, aliceTiming).finished;
      
      await alice3.animate(aliceTumbling, aliceTiming).finished;
      
      console.log('All animations completed');
  } catch (err) {
      alert(`Error when animating ... ${err instanceof Error ? err.message : String(err)}`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  animateSequentially();
});