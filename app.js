const roadmap = [
  {
    title: "Python とデータ",
    body: "配列、表データ、可視化を学び、モデルに渡す入力の形を理解します。"
  },
  {
    title: "教師あり学習",
    body: "回帰と分類を通じて、特徴量、ラベル、損失関数、評価指標を押さえます。"
  },
  {
    title: "ニューラルネット",
    body: "重み、活性化関数、誤差逆伝播、勾配降下法の役割をつなげます。"
  },
  {
    title: "深層学習の実践",
    body: "過学習、正則化、CNN、Transformer など、現代的なモデルへ進みます。"
  }
];

const concepts = [
  {
    title: "特徴量",
    body: "モデルが判断に使う入力情報。良い特徴量は学習を安定させます。"
  },
  {
    title: "損失関数",
    body: "予測の外れ具合を数値化するもの。モデルはこの値を小さくする方向に更新されます。"
  },
  {
    title: "学習率",
    body: "重みを一度にどれくらい動かすかを決める値。大きすぎると不安定になります。"
  },
  {
    title: "エポック",
    body: "学習データ全体を何周するかを表す回数。増やすほど常に良くなるわけではありません。"
  }
];

const quizItems = [
  {
    question: "教師あり学習で、正解としてモデルに与える値は何と呼ばれる？",
    answers: ["ラベル", "ノイズ", "エポック"],
    correct: 0,
    explain: "ラベルは、入力データに対応する正解値です。"
  },
  {
    question: "学習率が大きすぎると起きやすいことは？",
    answers: ["損失が不安定になる", "必ず精度が上がる", "データ数が増える"],
    correct: 0,
    explain: "一歩が大きすぎるため、最適な場所を飛び越えやすくなります。"
  },
  {
    question: "深層学習で層を重ねる主なねらいは？",
    answers: ["複雑な特徴を段階的に表現する", "学習データを削除する", "計算を必ず減らす"],
    correct: 0,
    explain: "浅い特徴から複雑な特徴へ、表現を積み上げられるのが強みです。"
  }
];

const progressKey = "ml-studio-progress";
const roadmapList = document.querySelector("#roadmapList");
const conceptGrid = document.querySelector("#conceptGrid");
const learningRate = document.querySelector("#learningRate");
const epochs = document.querySelector("#epochs");
const learningRateValue = document.querySelector("#learningRateValue");
const epochsValue = document.querySelector("#epochsValue");
const runExperiment = document.querySelector("#runExperiment");
const canvas = document.querySelector("#lossChart");
const labInsight = document.querySelector("#labInsight");
const questionText = document.querySelector("#questionText");
const answerList = document.querySelector("#answerList");
const quizResult = document.querySelector("#quizResult");

let currentQuiz = 0;

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch {
    return {};
  }
}

function writeProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function renderRoadmap() {
  const progress = readProgress();
  roadmapList.innerHTML = "";

  roadmap.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "step";
    article.innerHTML = `
      <div>
        <p class="eyebrow">Step ${index + 1}</p>
        <h3>${item.title}</h3>
      </div>
      <p>${item.body}</p>
      <label class="check-row">
        <input type="checkbox" ${progress[index] ? "checked" : ""}>
        完了
      </label>
    `;

    const checkbox = article.querySelector("input");
    checkbox.addEventListener("change", () => {
      const nextProgress = readProgress();
      nextProgress[index] = checkbox.checked;
      writeProgress(nextProgress);
    });

    roadmapList.appendChild(article);
  });
}

function renderConcepts() {
  conceptGrid.innerHTML = concepts.map((concept) => `
    <article class="concept">
      <h3>${concept.title}</h3>
      <p>${concept.body}</p>
    </article>
  `).join("");
}

function createLossSeries(rate, epochCount) {
  const points = [];
  let loss = 1;

  for (let i = 1; i <= epochCount; i += 1) {
    const instability = rate > 0.2 ? Math.sin(i * rate * 8) * 0.08 : 0;
    const decay = Math.max(0.02, 1 - rate * 2.8);
    loss = Math.max(0.03, loss * decay + instability + 0.018);
    points.push(Number(loss.toFixed(3)));
  }

  return points;
}

function drawChart(points) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 42;
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;
  const max = Math.max(...points, 1);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfdfc";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#d9e2e8";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = padding + (plotHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#16817a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = padding + (plotWidth / Math.max(1, points.length - 1)) * index;
    const y = padding + plotHeight - (point / max) * plotHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();

  ctx.fillStyle = "#172026";
  ctx.font = "700 18px Segoe UI, sans-serif";
  ctx.fillText("Loss", padding, 28);
  ctx.fillText("Epoch", width - 112, height - 14);
}

function updateExperiment() {
  const rate = Number(learningRate.value);
  const epochCount = Number(epochs.value);
  learningRateValue.textContent = rate.toFixed(2);
  epochsValue.textContent = String(epochCount);

  const points = createLossSeries(rate, epochCount);
  drawChart(points);

  const first = points[0];
  const last = points[points.length - 1];
  if (rate > 0.2) {
    labInsight.textContent = "学習率が高めなので、損失が揺れやすくなっています。";
  } else if (last < first * 0.45) {
    labInsight.textContent = "損失が順調に下がっています。学習率とエポックのバランスが良さそうです。";
  } else {
    labInsight.textContent = "損失の下がり方がゆるやかです。学習率やエポックを少し増やしてみましょう。";
  }
}

function renderQuiz() {
  const item = quizItems[currentQuiz];
  questionText.textContent = item.question;
  quizResult.textContent = "";
  answerList.innerHTML = "";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      const isCorrect = index === item.correct;
      button.classList.add(isCorrect ? "correct" : "wrong");
      quizResult.textContent = `${isCorrect ? "正解" : "もう一歩"}: ${item.explain}`;
      setTimeout(() => {
        currentQuiz = (currentQuiz + 1) % quizItems.length;
        renderQuiz();
      }, 1800);
    });
    answerList.appendChild(button);
  });
}

renderRoadmap();
renderConcepts();
renderQuiz();
updateExperiment();

learningRate.addEventListener("input", updateExperiment);
epochs.addEventListener("input", updateExperiment);
runExperiment.addEventListener("click", updateExperiment);
